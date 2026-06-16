---
sidebar_position: 35
---

# Popover

Popover untuk menampilkan konten mengambang.

```blade
<laraliveui:popover>
    <laraliveui:popover.trigger>
        <laraliveui:button>Buka Popover</laraliveui:button>
    </laraliveui:popover.trigger>
    <laraliveui:popover.overlay>
        Konten popover di sini.
    </laraliveui:popover.overlay>
</laraliveui:popover>
```

## On Hover

```blade
<laraliveui:popover on-hover>
    <laraliveui:popover.trigger>
        <laraliveui:button>Hover saya</laraliveui:button>
    </laraliveui:popover.trigger>
    <laraliveui:popover.overlay>
        Konten muncul saat hover
    </laraliveui:popover.overlay>
</laraliveui:popover>
```

## Posisi & Align

```blade
<laraliveui:popover position="bottom" align="start">
    ...
</laraliveui:popover>
```

## Referensi

### `laraliveui:popover`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `position` | Posisi: `top`, `bottom`, `left`, `right` | `bottom` |
| `align` | Alignment: `start`, `center`, `end` | `center` |
| `offset` | Jarak dari trigger (px) | `6` |
| `on-hover` | Muncul saat hover | `false` |

### `laraliveui:popover.trigger`

Elemen pemicu popover. Tidak memiliki props.

### `laraliveui:popover.overlay`

Konten yang ditampilkan. Tidak memiliki props.
