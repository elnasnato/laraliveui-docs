---
sidebar_position: 7
---

# Card

Komponen kartu untuk menampung konten dalam wadah yang terstruktur.

```blade
<laraliveui:card>
    <laraliveui:heading>Judul Card</laraliveui:heading>
    <laraliveui:text>Konten card di sini.</laraliveui:text>
</laraliveui:card>
```

## Ukuran

```blade
<laraliveui:card size="sm">Kartu kecil</laraliveui:card>
<laraliveui:card>Kartu default</laraliveui:card>
```

## Dengan Header dan Footer

```blade
<laraliveui:card>
    <laraliveui:card.header>
        <laraliveui:heading size="lg">Judul Card</laraliveui:heading>
        <laraliveui:subheading>Deskripsi card</laraliveui:subheading>
    </laraliveui:card.header>
    Konten utama card di sini.
    <laraliveui:card.footer>
        <laraliveui:button variant="primary">Simpan</laraliveui:button>
    </laraliveui:card.footer>
</laraliveui:card>
```

## Referensi

### `laraliveui:card`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `size` | Ukuran: `base`, `sm` | `base` |

| Slot | Deskripsi |
|------|-----------|
| default | Konten utama card |

### `laraliveui:card.header`

Header card. Tidak memiliki props.

### `laraliveui:card.footer`

Footer card. Tidak memiliki props.

### `laraliveui:card.media`

Media card. Tidak memiliki props.

### `laraliveui:card.group`

Group card. Tidak memiliki props.
