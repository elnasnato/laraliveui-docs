---
sidebar_position: 17
---

# Tooltip

Tooltip untuk menampilkan informasi tambahan saat hover.

```blade
<laraliveui:tooltip text="Info lengkap">
    <laraliveui:button>Hover saya</laraliveui:button>
</laraliveui:tooltip>
```

## Posisi

```blade
<laraliveui:tooltip text="Tooltip atas" position="top">
    <laraliveui:button>Atas</laraliveui:button>
</laraliveui:tooltip>

<laraliveui:tooltip text="Tooltip bawah" position="bottom">
    <laraliveui:button>Bawah</laraliveui:button>
</laraliveui:tooltip>

<laraliveui:tooltip text="Tooltip kiri" position="left">
    <laraliveui:button>Kiri</laraliveui:button>
</laraliveui:tooltip>

<laraliveui:tooltip text="Tooltip kanan" position="right">
    <laraliveui:button>Kanan</laraliveui:button>
</laraliveui:tooltip>
```

## Referensi

### `laraliveui:tooltip`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `text` | Teks tooltip | — |
| `position` | Posisi: `top`, `bottom`, `left`, `right` | `top` |
