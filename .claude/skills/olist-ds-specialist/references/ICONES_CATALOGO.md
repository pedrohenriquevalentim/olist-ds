# Catálogo de Ícones — Design System Olist

**Fonte:** Figma `design-system` · node `916:8864` ("all icons")
**Gerado em:** 2026-09-11
**Total de ícones:** 277 no Figma · 272 no componente `Icon`

---

## Regra de uso obrigatória

Sempre use o componente `Icon` com um nome exato deste catálogo:

```tsx
import { Icon } from '@olist/design-system';

// ✅ correto — nome exato do catálogo
<Icon name="arrow-right" size={24} />
<Icon name="arrow-right-fill" size={24} />  // variante preenchida

// ❌ proibido — nunca invente nomes, nunca use SVG inline em telas
<svg>...</svg>
<Icon name="arrow" />   // nome inexistente
```

**Convenção de variantes:**
- `name` → contorno (outline)
- `name-fill` → preenchido (filled)

Todos os 272 ícones do componente possuem ambas as variantes (`name` e `name-fill`).

---

## Categorias

> **Ícones marcados com `⚠️`** existem no Figma mas ainda não foram adicionados ao componente `Icon`. Abra issue ou execute `npm run generate:icons` após exportar os SVGs.

---

### logistics (25 ícones)

| name | name-fill |
|---|---|
| `package` | `package-fill` |
| `stock` | `stock-fill` |
| `map-pin` | `map-pin-fill` |
| `package-check` | `package-check-fill` |
| `package-more` | `package-more-fill` |
| `package-cancel` | `package-cancel-fill` |
| `package-open` | `package-open-fill` |
| `package-cart` | `package-cart-fill` |
| `package-manage` | `package-manage-fill` |
| `truck` | `truck-fill` |
| `weight` | `weight-fill` |
| `scale` | `scale-fill` |
| `ruler` | `ruler-fill` |
| `square` | `square-fill` |
| `gift` | `gift-fill` |
| `barcode-reader` | `barcode-reader-fill` |
| `fragile` | `fragile-fill` |
| `package-bike` | `package-bike-fill` |
| `package-storage` | `package-storage-fill` |
| `map` | `map-fill` |
| `conveyor` | `conveyor-fill` |
| `delivery` | `delivery-fill` |
| `truck-express` | `truck-express-fill` |
| `truck-loading` | `truck-loading-fill` |
| `tag-delivery` | `tag-delivery-fill` |

---

### sales (23 ícones)

| name | name-fill |
|---|---|
| `shopping-cart` | `shopping-cart-fill` |
| `send` | `send-fill` |
| `megaphone` | `megaphone-fill` |
| `invoice` | `invoice-fill` |
| `inbox` | `inbox-fill` |
| `order-cancel` | `order-cancel-fill` |
| `trophy` | `trophy-fill` |
| `star` | `star-fill` |
| `bip` | `bip-fill` |
| `graph-desktop` | `graph-desktop-fill` |
| `package-desktop` | `package-desktop-fill` |
| `package-desktop-check` | `package-desktop-check-fill` |
| `tag-desktop` | `tag-desktop-fill` |
| `sales-check` | `sales-check-fill` |
| `nf` | `nf-fill` · ⚠️ ausente no componente |
| `tag-mobile` | `tag-mobile-fill` |
| `graph-mobile` | `graph-mobile-fill` |
| `package-mobile` | `package-mobile-fill` |
| `sales-oms` | `sales-oms-fill` |
| `package-shopping` | `package-shopping-fill` |
| `sales-extensions` | `sales-extensions-fill` |
| `omnichannel` | `omnichannel-fill` |
| `smart-pricing` | `smart-pricing-fill` |

---

### products (4 ícones)

| name | name-fill |
|---|---|
| `tag` | `tag-fill` |
| `shopping-bag` | `shopping-bag-fill` |
| `tag-more` | `tag-more-fill` |
| `product-catalog` | `product-catalog-fill` |

---

### segments (6 ícones)

| name | name-fill |
|---|---|
| `ecommerce` | `ecommerce-fill` |
| `store` | `store-fill` |
| `services` | `services-fill` |
| `marketplaces` | `marketplaces-fill` |
| `wholesale` | `wholesale-fill` |
| `industry` | `industry-fill` |

---

### feedback (12 ícones)

| name | name-fill |
|---|---|
| `chat-bubbles` | `chat-bubbles-fill` |
| `alert` | `alert-fill` |
| `alert-triangle` | `alert-triangle-fill` |
| `alert-circle` | `alert-circle-fill` |
| `mail` | `mail-fill` |
| `informative` | `informative-fill` |
| `informative-circle` | `informative-circle-fill` |
| `help` | `help-fill` |
| `help-circle` | `help-circle-fill` |
| `chat` | `chat-fill` |
| `attachtment` | `attachtment-fill` |
| `repeat` | `repeat-fill` |

---

### user (9 ícones)

| name | name-fill |
|---|---|
| `profile` | `profile-fill` |
| `profile-cancel` | `profile-cancel-fill` |
| `profile-add` | `profile-add-fill` |
| `profile-manage` | `profile-manage-fill` |
| `profile-lock` | `profile-lock-fill` |
| `profile-folder` | `profile-folder-fill` |
| `id-card` | `id-card-fill` |
| `bell` | `bell-fill` |
| `storage` | `storage-fill` |

---

### billing (29 ícones)

| name | name-fill |
|---|---|
| `chart-bar-up` | `chart-bar-up-fill` |
| `chart-bar-down` | `chart-bar-down-fill` |
| `chart-bar-variation` | `chart-bar-variation-fill` |
| `chart-pie` | `chart-pie-fill` |
| `credit-card` | `credit-card-fill` |
| `wallet` | `wallet-fill` |
| `qr-code` | `qr-code-fill` |
| `barcode` | `barcode-fill` |
| `bank` | `bank-fill` |
| `discount-hand` | `discount-hand-fill` |
| `checkings-account` | `checkings-account-fill` |
| `money-notification` | `money-notification-fill` |
| `transaction` | `transaction-fill` |
| `percentual` | `percentual-fill` |
| `limits` | `limits-fill` |
| `credit` | `credit-fill` |
| `pix` | `pix-fill` |
| `money-in` | `money-in-fill` |
| `money-in-out` | `money-in-out-fill` |
| `money-circle` | `money-circle-fill` |
| `discount` | `discount-fill` |
| `money-change` | `money-change-fill` |
| `cashback` | `cashback-fill` |
| `money-hand` | `money-hand-fill` |
| `money-bag` | `money-bag-fill` |
| `verified` | `verified-fill` |
| `money-coin` | `money-coin-fill` |
| `money-paper` | `money-paper-fill` |
| `nfc` | `nfc-fill` |

---

### reports (13 ícones)

| name | name-fill |
|---|---|
| `file` | `file-fill` |
| `file-text` | `file-text-fill` |
| `file-graph` | `file-graph-fill` |
| `file-certified` | `file-certified-fill` |
| `file-nf` | `file-nf-fill` |
| `file-pdf` | `file-pdf-fill` |
| `file-sign` | `file-sign-fill` |
| `file-pie-chart` | `file-pie-chart-fill` |
| `file-spreadsheet` | `file-spreadsheet-fill` |
| `file-money` | `file-money-fill` |
| `file-cancel` | `file-cancel-fill` |
| `file-check` | `file-check-fill` |
| `file-import` | `file-import-fill` |

---

### objects (62 ícones)

| name | name-fill |
|---|---|
| `desktop` | `desktop-fill` |
| `mobile` | `mobile-fill` |
| `calendar` | `calendar-fill` |
| `light-bulb` | `light-bulb-fill` |
| `rocket` | `rocket-fill` |
| `search` | `search-fill` |
| `book` | `book-fill` |
| `phone` | `phone-fill` |
| `globe` | `globe-fill` |
| `clock` | `clock-fill` |
| `print` | `print-fill` |
| `camera` | `camera-fill` |
| `image` | `image-fill` |
| `bolt` | `bolt-fill` |
| `scissors` | `scissors-fill` |
| `folder` | `folder-fill` |
| `folder-open` | `folder-open-fill` |
| `clipboard` | `clipboard-fill` |
| `tool` | `tool-fill` |
| `tools` | `tools-fill` |
| `extension` | `extension-fill` |
| `code-integration` | `code-integration-fill` |
| `desktop-code-integration` | `desktop-code-integration-fill` |
| `fingerprint` | `fingerprint-fill` |
| `face-id` | `face-id-fill` |
| `hourglass` | `hourglass-fill` |
| `key` | `key-fill` |
| `library-books` | `library-books-fill` |
| `life-saver` | `life-saver-fill` |
| `video` | `video-fill` |
| `outlet` | `outlet-fill` |
| `devices` | `devices-fill` |
| `cake` | `cake-fill` |
| `task-list` | `task-list-fill` |
| `mic` | `mic-fill` |
| `server` | `server-fill` |
| `t-shirt` | `t-shirt-fill` |
| `spreadsheet` | `spreadsheet-fill` |
| `calculator` | `calculator-fill` |
| `sitemap_h` | `sitemap_h-fill` · ⚠️ ausente no componente |
| `sitemap_v` | `sitemap_v-fill` · ⚠️ ausente no componente |
| `mail-open` | `mail-open-fill` |
| `dashboard` | `dashboard-fill` |
| `handshake` | `handshake-fill` |
| `traffic-cone` | `traffic-cone-fill` |
| `basket` | `basket-fill` |
| `arrow-move` | `arrow-move-fill` |
| `pencil` | `pencil-fill` |
| `target` | `target-fill` |
| `pay-machine-card` | `pay-machine-card-fill` |
| `support` | `support-fill` |
| `ticket` | `ticket-fill` |
| `baby-stroller` | `baby-stroller-fill` |
| `female` | `female-fill` |
| `male` | `male-fill` |
| `keyboard` | `keyboard-fill` |
| `pin` | `pin-fill` |
| `cookie` | `cookie-fill` |
| `umbrella` | `umbrella-fill` |
| `usb` | `usb-fill` |
| `no-connection` | `no-connection-fill` |
| `brain` | `brain-fill` |

---

### actions (37 ícones)

| name | name-fill |
|---|---|
| `trash` | `trash-fill` |
| `forward` | `forward-fill` |
| `reply` | `reply-fill` |
| `filter` | `filter-fill` |
| `visibility-off` | `visibility-off-fill` |
| `visibility-on` | `visibility-on-fill` |
| `home` | `home-fill` |
| `lock` | `lock-fill` |
| `unlock` | `unlock-fill` |
| `settings` | `settings-fill` |
| `upload` | `upload-fill` |
| `logout` | `logout-fill` |
| `download` | `download-fill` |
| `open-in-new` | `open-in-new-fill` |
| `edit` | `edit-fill` |
| `copy-paste` | `copy-paste-fill` |
| `sliders-tune` | `sliders-tune-fill` |
| `url-link` | `url-link-fill` |
| `url-unlink` | `url-unlink-fill` · ⚠️ ausente no componente |
| `loading` | `loading-fill` |
| `circle` | `circle-fill` |
| `update` | `update-fill` |
| `zoom-out` | `zoom-out-fill` |
| `zoom-in` | `zoom-in-fill` |
| `remove-circle` | `remove-circle-fill` |
| `add-circle` | `add-circle-fill` |
| `add` | `add-fill` |
| `remove` | `remove-fill` |
| `sort` | `sort-fill` |
| `list` | `list-fill` |
| `audio-on` | `audio-on-fill` |
| `power-off` | `power-off-fill` |
| `share` | `share-fill` |
| `arrow-split` | `arrow-split-fill` |
| `layers` | `layers-fill` |
| `pan-hand` | `pan-hand-fill` |
| `pan-hand-arrow` | `pan-hand-arrow-fill` |

---

### dashboard (45 ícones)

| name | name-fill |
|---|---|
| `arrow-left` | `arrow-left-fill` |
| `arrow-right` | `arrow-right-fill` |
| `arrow-up` | `arrow-up-fill` |
| `arrow-down` | `arrow-down-fill` |
| `chevron-left` | `chevron-left-fill` |
| `chevron-right` | `chevron-right-fill` |
| `chevron-top` | `chevron-top-fill` |
| `chevron-down` | `chevron-down-fill` |
| `chevron-left-right` | `chevron-left-right-fill` |
| `chevron-up-down` | `chevron-up-down-fill` |
| `swap-h` | `swap-h-fill` |
| `more-h` | `more-h-fill` |
| `more-v` | `more-v-fill` |
| `apps` | `apps-fill` |
| `menu` | `menu-fill` |
| `expand` | `expand-fill` |
| `collapse` | `collapse-fill` |
| `close` | `close-fill` |
| `check` | `check-fill` |
| `layout-sidebar` | `layout-sidebar-fill` · ⚠️ ausente no componente |
| `reorder` | `reorder-fill` |
| `view-large` | `view-large-fill` |
| `view-medium` | `view-medium-fill` |
| `view-small` | `view-small-fill` |
| `column` | `column-fill` |
| `arrow-right-circle` | `arrow-right-circle-fill` |
| `arrow-left-circle` | `arrow-left-circle-fill` |
| `arrow-up-circle` | `arrow-up-circle-fill` |
| `arrow-down-circle` | `arrow-down-circle-fill` |
| `cancel` | `cancel-fill` |
| `confirm` | `confirm-fill` |
| `pending` | `pending-fill` |
| `reaction-good` | `reaction-good-fill` |
| `reaction-bad` | `reaction-bad-fill` |
| `reaction-neutral` | `reaction-neutral-fill` |
| `reaction-nice` | `reaction-nice-fill` |
| `pause` | `pause-fill` |
| `play` | `play-fill` |
| `stop` | `stop-fill` |
| `chevron-left-circle` | `chevron-left-circle-fill` |
| `chevron-right-circle` | `chevron-right-circle-fill` |
| `chevron-up-circle` | `chevron-up-circle-fill` |
| `chevron-down-circle` | `chevron-down-circle-fill` |
| `chevron-left-right-circle` | `chevron-left-right-circle-fill` |
| `chevron-up-down-circle` | `chevron-up-down-circle-fill` |

---

### social (12 ícones)

| name | name-fill |
|---|---|
| `cheer-clap` | `cheer-clap-fill` |
| `follow` | `follow-fill` |
| `comment` | `comment-fill` |
| `like` | `like-fill` |
| `bookmark` | `bookmark-fill` |
| `whatsapp` | `whatsapp-fill` |
| `instagram` | `instagram-fill` |
| `facebook` | `facebook-fill` |
| `youtube` | `youtube-fill` |
| `linkedin` | `linkedin-fill` |
| `tiktok` | `tiktok-fill` |
| `rss` | `rss-fill` |

---

## Ícones ausentes no componente (5)

Existem no Figma mas ainda não foram exportados para `src/assets/icons/svgs/`:

| Nome | Categoria |
|---|---|
| `nf` | sales |
| `url-unlink` | actions |
| `layout-sidebar` | dashboard |
| `sitemap_h` | objects |
| `sitemap_v` | objects |

Para adicioná-los: exporte os SVGs do Figma (node `916:8864`), salve em `src/assets/icons/svgs/` seguindo a convenção `nome-off.svg` / `nome-on.svg`, então execute `npm run generate:icons`.
