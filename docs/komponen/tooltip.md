---
sidebar_position: 17
---

# Tooltip

Tooltip untuk menampilkan informasi tambahan saat hover.

```blade
<laraliveui:tooltip content="Info lengkap">
    <laraliveui:button>Hover saya</laraliveui:button>
</laraliveui:tooltip>
```

## Posisi

```blade
<laraliveui:tooltip content="Tooltip atas" position="top">
    <laraliveui:button>Atas</laraliveui:button>
</laraliveui:tooltip>

<laraliveui:tooltip content="Tooltip bawah" position="bottom">
    <laraliveui:button>Bawah</laraliveui:button>
</laraliveui:tooltip>

<laraliveui:tooltip content="Tooltip kiri" position="left">
    <laraliveui:button>Kiri</laraliveui:button>
</laraliveui:tooltip>

<laraliveui:tooltip content="Tooltip kanan" position="right">
    <laraliveui:button>Kanan</laraliveui:button>
</laraliveui:tooltip>
```

## Interactive

```blade
<laraliveui:tooltip content="Tooltip interaktif" interactive>
    <laraliveui:button>Hover</laraliveui:button>
</laraliveui:tooltip>
```

## Toggleable

```blade
<laraliveui:tooltip content="Klik untuk toggle" toggleable>
    <laraliveui:button>Klik saya</laraliveui:button>
</laraliveui:tooltip>
```

## Dengan Shortcut

```blade
<laraliveui:tooltip content="Simpan" kbd="⌘S">
    <laraliveui:button>Simpan</laraliveui:button>
</laraliveui:tooltip>
```

## Referensi

### `laraliveui:tooltip`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `content` | Teks tooltip | `null` |
| `position` | Posisi: `top`, `bottom`, `left`, `right` | `top` |
| `align` | Alignment: `start`, `center`, `end` | `center` |
| `interactive` | Izinkan interaksi dengan tooltip | `null` |
| `kbd` | Shortcut keyboard | `null` |
| `toggleable` | Buka/tutup dengan klik | `null` |

### `laraliveui:tooltip.content`

Konten tooltip kustom. Tidak memiliki props.
