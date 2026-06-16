---
sidebar_position: 53
---

# Theme Switcher

Komponen toggle untuk mengganti tema light/dark/system.

```blade
<laraliveui:theme-switcher />
```

## Referensi

### `laraliveui:theme-switcher`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `position` | Posisi tooltip | `bottom end` |

Komponen ini menggunakan `window.LaraLiveUI.applyAppearance()` untuk mengubah tema dan menyimpan preferensi di `localStorage` dengan key `laraliveui.appearance`.
