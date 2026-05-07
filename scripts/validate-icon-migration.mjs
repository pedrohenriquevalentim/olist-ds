#!/usr/bin/env node

/**
 * validate-icon-migration.mjs
 * 
 * Script de validação automática da migração de ícones.
 * Verifica se todos os componentes foram migrados corretamente.
 * 
 * Uso:
 *   node scripts/validate-icon-migration.mjs
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const COMPONENTS_DIR = join(process.cwd(), 'src', 'components');
const FIGMA_URL_PATTERN = /figma\.com\/api\/mcp/;
const ICON_IMPORT_PATTERN = /import.*Icon.*from.*Icon/;
const ICON_NAME_PATTERN = /iconName.*IconName/;

// Cores para output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function getComponentFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const entries = readdirSync(currentDir);
    
    for (const entry of entries) {
      const fullPath = join(currentDir, entry);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Ignorar node_modules, .git, etc.
        if (!entry.startsWith('.') && entry !== 'node_modules') {
          traverse(fullPath);
        }
      } else if (entry.endsWith('.tsx') || entry.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function checkFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const componentName = filePath.split('/').slice(-2, -1)[0];
  
  const checks = {
    hasFigmaUrl: FIGMA_URL_PATTERN.test(content),
    hasIconImport: ICON_IMPORT_PATTERN.test(content),
    hasIconNameProp: ICON_NAME_PATTERN.test(content),
  };
  
  return { componentName, filePath, ...checks };
}

function analyzeResults(results) {
  const componentsWithFigmaUrls = results.filter(r => r.hasFigmaUrl);
  const componentsMigrated = results.filter(r => r.hasIconImport && r.hasIconNameProp);
  const componentsPartiallyMigrated = results.filter(r => 
    (r.hasIconImport || r.hasIconNameProp) && r.hasFigmaUrl
  );
  
  return {
    total: results.length,
    withFigmaUrls: componentsWithFigmaUrls,
    migrated: componentsMigrated,
    partiallyMigrated: componentsPartiallyMigrated,
  };
}

function printReport(analysis) {
  log('\n╔═══════════════════════════════════════════════════════════════╗', 'cyan');
  log('║       RELATÓRIO DE VALIDAÇÃO DA MIGRAÇÃO DE ÍCONES           ║', 'cyan');
  log('╚═══════════════════════════════════════════════════════════════╝\n', 'cyan');
  
  // Estatísticas gerais
  log('📊 ESTATÍSTICAS GERAIS:', 'blue');
  log(`   Total de arquivos analisados: ${analysis.total}`);
  log(`   Componentes com URLs do Figma: ${analysis.withFigmaUrls.length}`, 
    analysis.withFigmaUrls.length > 0 ? 'yellow' : 'green');
  log(`   Componentes migrados: ${analysis.migrated.length}`, 'green');
  log(`   Componentes parcialmente migrados: ${analysis.partiallyMigrated.length}`,
    analysis.partiallyMigrated.length > 0 ? 'yellow' : 'green');
  
  // Componentes com URLs do Figma (ainda não migrados)
  if (analysis.withFigmaUrls.length > 0) {
    log('\n⚠️  COMPONENTES COM URLS DO FIGMA (PRECISAM MIGRAÇÃO):', 'yellow');
    analysis.withFigmaUrls.forEach(result => {
      log(`   ❌ ${result.componentName}`, 'red');
      log(`      Arquivo: ${result.filePath.replace(process.cwd(), '.')}`);
      
      if (result.hasIconImport) {
        log(`      ✓ Já importa Icon`, 'green');
      }
      if (result.hasIconNameProp) {
        log(`      ✓ Já tem prop iconName`, 'green');
      }
    });
  }
  
  // Componentes migrados com sucesso
  if (analysis.migrated.length > 0) {
    log('\n✅ COMPONENTES MIGRADOS COM SUCESSO:', 'green');
    analysis.migrated.forEach(result => {
      if (!result.hasFigmaUrl) {
        log(`   ✓ ${result.componentName}`, 'green');
      }
    });
  }
  
  // Componentes parcialmente migrados
  if (analysis.partiallyMigrated.length > 0) {
    log('\n⚠️  COMPONENTES PARCIALMENTE MIGRADOS:', 'yellow');
    analysis.partiallyMigrated.forEach(result => {
      log(`   ⚡ ${result.componentName}`, 'yellow');
      log(`      Arquivo: ${result.filePath.replace(process.cwd(), '.')}`);
      log(`      Status: Tem Icon import/prop mas ainda tem URLs do Figma`);
    });
  }
  
  // Resumo final
  log('\n' + '═'.repeat(65), 'cyan');
  
  const allMigrated = analysis.withFigmaUrls.length === 0;
  
  if (allMigrated) {
    log('🎉 MIGRAÇÃO COMPLETA! Todos os componentes foram migrados.', 'green');
    log('   Nenhuma URL do Figma API encontrada.', 'green');
  } else {
    log(`⚠️  MIGRAÇÃO INCOMPLETA: ${analysis.withFigmaUrls.length} componente(s) ainda precisam ser migrados.`, 'yellow');
  }
  
  log('═'.repeat(65) + '\n', 'cyan');
  
  return allMigrated;
}

function printActionItems(analysis) {
  if (analysis.withFigmaUrls.length === 0) {
    return;
  }
  
  log('📋 AÇÕES NECESSÁRIAS:', 'blue');
  log('');
  
  analysis.withFigmaUrls.forEach((result, index) => {
    log(`${index + 1}. Migrar ${result.componentName}:`, 'yellow');
    log(`   cd src/components/${result.componentName}/`);
    
    if (!result.hasIconImport) {
      log(`   • Adicionar: import { Icon, IconName } from '../Icon';`);
    }
    
    if (!result.hasIconNameProp) {
      log(`   • Adicionar prop: iconName?: IconName`);
    }
    
    log(`   • Substituir URLs do Figma por <Icon name={iconName} />`);
    log(`   • Atualizar Story com controle de ícone`);
    log('');
  });
}

// Executar validação
async function main() {
  log('🔍 Iniciando validação da migração de ícones...\n', 'cyan');
  
  // Buscar todos os arquivos de componentes
  const files = getComponentFiles(COMPONENTS_DIR);
  log(`📁 Encontrados ${files.length} arquivo(s) em src/components/\n`);
  
  // Verificar cada arquivo
  const results = files.map(checkFile);
  
  // Analisar resultados
  const analysis = analyzeResults(results);
  
  // Imprimir relatório
  const allMigrated = printReport(analysis);
  
  // Imprimir ações necessárias
  printActionItems(analysis);
  
  // Exit code
  process.exit(allMigrated ? 0 : 1);
}

main();
