---
sidebar_position: 8
---

# Badge

Komponen badge/label untuk menampilkan status, kategori, atau tag.

```blade
<laraliveui:badge>Aktif</laraliveui:badge>
<laraliveui:badge color="red">Danger</laraliveui:badge>
```

## Warna

Zinc Red Orange Amber Yellow Lime Green Emerald Teal Cyan Sky Blue Indigo Violet Purple Fuchsia Pink Rose

```blade
<laraliveui:badge color="zinc">Zinc</laraliveui:badge>
<laraliveui:badge color="red">Red</laraliveui:badge>
<laraliveui:badge color="green">Green</laraliveui:badge>
<laraliveui:badge color="blue">Blue</laraliveui:badge>
<laraliveui:badge color="indigo">Indigo</laraliveui:badge>
```

## Solid

```blade
<laraliveui:badge variant="solid" color="red">Danger</laraliveui:badge>
<laraliveui:badge variant="solid" color="green">Success</laraliveui:badge>
```

## Ukuran

```blade
<laraliveui:badge size="sm">Small</laraliveui:badge>
<laraliveui:badge>Default</laraliveui:badge>
<laraliveui:badge size="lg">Large</laraliveui:badge>
```

## Rounded

```blade
<laraliveui:badge rounded>Pill Badge</laraliveui:badge>
```

## Dengan Ikon

```blade
<laraliveui:badge icon="check-circle" color="green">Aktif</laraliveui:badge>
<laraliveui:badge icon="exclamation-circle" color="amber">Pending</laraliveui:badge>
<laraliveui:badge icon="x-mark" color="red">Ditolak</laraliveui:badge>
```

## Closable

```blade
<laraliveui:badge>
    Tag
    <laraliveui:badge.close />
</laraliveui:badge>
```

## Referensi

### `laraliveui:badge`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `color` | Warna (nama Tailwind) | `zinc` |
| `size` | Ukuran: `sm`, `base`, `lg` | `base` |
| `variant` | Varian: `solid` | `null` |
| `rounded` | Bentuk pill (full rounded) | `null` |
| `icon` | Nama ikon di awal | `null` |
| `icon:variant` | Varian ikon | `micro` |
| `icon:trailing` | Ikon di akhir | `null` |
| `inset` | Negative margin | `null` |
| `label` | Teks alternatif (jika slot kosong) | `null` |

### `laraliveui:badge.close`

Tombol close pada badge. Tidak memiliki props.
