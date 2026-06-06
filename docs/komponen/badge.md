---
sidebar_position: 8
---

# Badge

Komponen badge/label untuk menampilkan status, kategori, atau tag.

```blade
<laraliveui:badge>Aktif</laraliveui:badge>
<laraliveui:badge variant="solid">Baru</laraliveui:badge>
```

## Warna

### Default (subtle)

Zinc Red Orange Amber Yellow Lime Green Emerald Teal Cyan Sky Blue Indigo Violet Purple Fuchsia Pink Rose

```blade
<laraliveui:badge color="zinc">Zinc</laraliveui:badge>
<laraliveui:badge color="red">Red</laraliveui:badge>
<laraliveui:badge color="green">Green</laraliveui:badge>
<laraliveui:badge color="blue">Blue</laraliveui:badge>
<laraliveui:badge color="indigo">Indigo</laraliveui:badge>
<laraliveui:badge color="purple">Purple</laraliveui:badge>
<laraliveui:badge color="pink">Pink</laraliveui:badge>
<laraliveui:badge color="orange">Orange</laraliveui:badge>
<laraliveui:badge color="amber">Amber</laraliveui:badge>
<laraliveui:badge color="emerald">Emerald</laraliveui:badge>
<laraliveui:badge color="teal">Teal</laraliveui:badge>
<laraliveui:badge color="cyan">Cyan</laraliveui:badge>
<laraliveui:badge color="sky">Sky</laraliveui:badge>
<laraliveui:badge color="violet">Violet</laraliveui:badge>
<laraliveui:badge color="fuchsia">Fuchsia</laraliveui:badge>
<laraliveui:badge color="rose">Rose</laraliveui:badge>
```

### Solid

```blade
<laraliveui:badge variant="solid" color="red">Danger</laraliveui:badge>
<laraliveui:badge variant="solid" color="green">Success</laraliveui:badge>
<laraliveui:badge variant="solid" color="blue">Info</laraliveui:badge>
<laraliveui:badge variant="solid" color="amber">Warning</laraliveui:badge>
```

## Ukuran

```blade
<laraliveui:badge size="sm">Small</laraliveui:badge>
<laraliveui:badge>Default</laraliveui:badge>
<laraliveui:badge size="lg">Large</laraliveui:badge>
```

## Rounded (Pill)

```blade
<laraliveui:badge rounded>Pill Badge</laraliveui:badge>
```

## Dengan Ikon

```blade
<laraliveui:badge icon="check-circle" variant="solid" color="green">Aktif</laraliveui:badge>
<laraliveui:badge icon="exclamation-circle" color="amber">Pending</laraliveui:badge>
<laraliveui:badge icon="x-mark" color="red" icon:trailing="x-mark">Ditolak</laraliveui:badge>
```

## Closable

```blade
<laraliveui:badge>
    Tag
    <laraliveui:badge.close />
</laraliveui:badge>
```

## Inset

```blade
<laraliveui:badge inset="top">Badge Inset</laraliveui:badge>
<laraliveui:badge inset="top right">Pojok</laraliveui:badge>
```

## Referensi

### `laraliveui:badge`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Gaya: `subtle` (default), `solid` | `subtle` |
| `color` | Warna (nama Tailwind) | `zinc` |
| `size` | Ukuran: `sm`, `base`, `lg` | `base` |
| `rounded` | Bentuk pill (full rounded) | `false` |
| `icon` | Nama ikon di awal | — |
| `icon:variant` | Varian ikon | `micro` |
| `icon:trailing` | Ikon di akhir | — |
| `inset` | Negative margin | — |
| `label` | Teks alternatif (jika slot kosong) | — |

### `laraliveui:badge.close`

Tombol close pada badge.
