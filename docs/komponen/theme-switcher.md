---
sidebar_position: 53
---

# Theme Switcher

Komponen toggle untuk mengganti tema light/dark/system.

```blade
<laraliveui:theme-switcher />
```

## Ikon Kustom

```blade
<laraliveui:theme-switcher>
    <x-slot:light-icon>
        <svg>...</svg>
    </x-slot:light-icon>
    <x-slot:dark-icon>
        <svg>...</svg>
    </x-slot:dark-icon>
    <x-slot:system-icon>
        <svg>...</svg>
    </x-slot:system-icon>
</laraliveui:theme-switcher>
```

## Referensi

### `laraliveui:theme-switcher`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `position` | Posisi tooltip | `bottom end` |

| Slot | Deskripsi |
|------|-----------|
| `light-icon` | Ikon mode light |
| `dark-icon` | Ikon mode dark |
| `system-icon` | Ikon mode system |

Komponen ini menggunakan `window.LaraLiveUI.applyAppearance()` untuk mengubah tema dan menyimpan preferensi di `localStorage` dengan key `laraliveui.appearance`.
