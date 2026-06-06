---
sidebar_position: 28
---

# Heading

Komponen heading dengan ukuran dan level yang dapat disesuaikan.

```blade
<laraliveui:heading>Default Heading</laraliveui:heading>
<laraliveui:heading size="lg">Large Heading</laraliveui:heading>
<laraliveui:heading size="xl">Extra Large Heading</laraliveui:heading>
```

## Level (Tag HTML)

```blade
<laraliveui:heading level="1">Heading 1</laraliveui:heading>
<laraliveui:heading level="2">Heading 2</laraliveui:heading>
<laraliveui:heading level="3">Heading 3</laraliveui:heading>
<laraliveui:heading level="4">Heading 4</laraliveui:heading>
```

## Accent

```blade
<laraliveui:heading accent>Heading dengan warna aksen</laraliveui:heading>
```

## Subheading

```blade
<laraliveui:heading>Judul</laraliveui:heading>
<laraliveui:subheading>Deskripsi di bawah heading</laraliveui:subheading>
```

## Text

```blade
<laraliveui:text>Teks paragraf biasa.</laraliveui:text>
<laraliveui:text>Teks dengan <laraliveui:link href="#">link</laraliveui:link> di dalamnya.</laraliveui:text>
```

## Referensi

### `laraliveui:heading`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `size` | Ukuran: `base`, `lg`, `xl` | `base` |
| `level` | Level heading: `1`, `2`, `3`, `4` | — (render `<div>`) |
| `accent` | Gunakan warna aksen | `false` |

### `laraliveui:subheading`

Subheading untuk mendampingi heading.

### `laraliveui:text`

Teks paragraf biasa.
