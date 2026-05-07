#!/usr/bin/env python3
"""
Recebe JSON via stdin com lista de {name, variant, svg} e salva os SVGs normalizados.
Uso: echo '<json>' | python3 save-icons-batch.py
"""
import sys, json, re, os

SVG_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'assets', 'icons', 'svgs')

def normalize(svg: str) -> str:
    s = svg
    s = re.sub(r'width="24"', 'width="20"', s)
    s = re.sub(r'height="24"', 'height="20"', s)
    s = re.sub(r'\s+xmlns="[^"]*"', '', s)
    # Replace any fill color that isn't "none" with currentColor
    s = re.sub(r'fill="(?!none)([^"]*)"', 'fill="currentColor"', s)
    # Replace stroke colors
    s = re.sub(r'stroke="(?!none)([^"]*)"', 'stroke="currentColor"', s)
    s = s.replace('\n', '').strip()
    return s

data = json.load(sys.stdin)
saved = []
skipped = []

for entry in data:
    name = entry['name'].strip()
    variant = entry['variant']  # 'outline' or 'fill'
    svg = entry['svg']

    filename = f"{name}-fill.svg" if variant == 'fill' else f"{name}.svg"
    filepath = os.path.join(SVG_DIR, filename)

    if os.path.exists(filepath):
        skipped.append(filename)
        continue

    normalized = normalize(svg)
    with open(filepath, 'w') as f:
        f.write(normalized)
    saved.append(filename)

print(f"Saved: {len(saved)}, Skipped: {len(skipped)}")
for f in saved:
    print(f"  + {f}")
