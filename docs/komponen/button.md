---
sidebar_position: 1
---

# Button

Komponen tombol yang kuat dan dapat dikomposisi untuk aplikasi Anda.

```blade
<laraliveui:button>Button</laraliveui:button>
```

## Variant

Gunakan prop `variant` untuk mengubah gaya visual tombol.

Default Primary Filled Danger Ghost Subtle

```blade
<laraliveui:button>Default</laraliveui:button>
<laraliveui:button variant="primary">Primary</laraliveui:button>
<laraliveui:button variant="filled">Filled</laraliveui:button>
<laraliveui:button variant="danger">Danger</laraliveui:button>
<laraliveui:button variant="ghost">Ghost</laraliveui:button>
<laraliveui:button variant="subtle">Subtle</laraliveui:button>
```

## Warna

Gunakan prop `color` dengan nama warna Tailwind untuk variant `primary`.

```blade
<laraliveui:button variant="primary" color="blue">Blue</laraliveui:button>
<laraliveui:button variant="primary" color="red">Red</laraliveui:button>
<laraliveui:button variant="primary" color="green">Green</laraliveui:button>
<laraliveui:button variant="primary" color="indigo">Indigo</laraliveui:button>
<laraliveui:button variant="primary" color="purple">Purple</laraliveui:button>
<laraliveui:button variant="primary" color="pink">Pink</laraliveui:button>
<laraliveui:button variant="primary" color="orange">Orange</laraliveui:button>
<laraliveui:button variant="primary" color="amber">Amber</laraliveui:button>
<laraliveui:button variant="primary" color="emerald">Emerald</laraliveui:button>
<laraliveui:button variant="primary" color="teal">Teal</laraliveui:button>
<laraliveui:button variant="primary" color="cyan">Cyan</laraliveui:button>
<laraliveui:button variant="primary" color="sky">Sky</laraliveui:button>
<laraliveui:button variant="primary" color="violet">Violet</laraliveui:button>
<laraliveui:button variant="primary" color="fuchsia">Fuchsia</laraliveui:button>
<laraliveui:button variant="primary" color="rose">Rose</laraliveui:button>
<laraliveui:button variant="primary" color="zinc">Zinc</laraliveui:button>
```

## Ukuran

Default Small Extra small

```blade
<laraliveui:button size="base">Base</laraliveui:button>
<laraliveui:button size="sm">Small</laraliveui:button>
<laraliveui:button size="xs">Extra small</laraliveui:button>
```

## Ikon

Ikon yang diatur ukuran dan gayanya secara otomatis.

```blade
<laraliveui:button icon="ellipsis-horizontal" />
<laraliveui:button icon="arrow-down-tray">Export</laraliveui:button>
<laraliveui:button icon:trailing="chevron-down">Open</laraliveui:button>
<laraliveui:button icon="x-mark" variant="ghost" />
```

Varian ikon:

```blade
<laraliveui:button icon="magnifying-glass" icon:variant="outline">Cari</laraliveui:button>
<laraliveui:button icon="plus" icon:variant="solid">Tambah</laraliveui:button>
<laraliveui:button icon="check" icon:variant="mini">Simpan</laraliveui:button>
<laraliveui:button icon="x-mark" icon:variant="micro">Tutup</laraliveui:button>
```

## Loading

Tombol dengan `wire:click` atau `type="submit"` otomatis menampilkan indikator loading dan menonaktifkan pointer events selama request.

```blade
<laraliveui:button wire:click="save">Simpan</laraliveui:button>
<laraliveui:button type="submit">Kirim</laraliveui:button>
```

Nonaktifkan dengan `:loading="false"`:

```blade
<laraliveui:button wire:click="save" :loading="false">Simpan</laraliveui:button>
```

## Full width

```blade
<laraliveui:button variant="primary" class="w-full">Kirim</laraliveui:button>
```

## Button Group

Gabungkan tombol terkait dengan border bersama.

```blade
<laraliveui:button.group>
    <laraliveui:button>Terlama</laraliveui:button>
    <laraliveui:button>Terbaru</laraliveui:button>
    <laraliveui:button>Populer</laraliveui:button>
</laraliveui:button.group>
```

### Icon Group

```blade
<laraliveui:button.group>
    <laraliveui:button icon="bars-3-bottom-left" />
    <laraliveui:button icon="bars-3" />
    <laraliveui:button icon="bars-3-bottom-right" />
</laraliveui:button.group>
```

### Attached Button

```blade
<laraliveui:button.group>
    <laraliveui:button>Produk Baru</laraliveui:button>
    <laraliveui:button icon="chevron-down" />
</laraliveui:button.group>
```

## Sebagai Link

Gunakan prop `href` untuk menampilkan tag `<a>` sebagai tombol.

```blade
<laraliveui:button href="https://example.com" icon:trailing="arrow-up-right">
    Kunjungi
</laraliveui:button>
```

## Square

Membuat tinggi dan lebar tombol sama. Otomatis untuk tombol icon-only.

```blade
<laraliveui:button square>...</laraliveui:button>
```

## Inset

Untuk variant ghost/subtle, gunakan prop `inset` untuk negasi padding.

```blade
<laraliveui:button size="sm" icon="x-mark" variant="ghost" inset />
```

## Keyboard Shortcut

```blade
<laraliveui:button kbd="⌘K">Cari</laraliveui:button>
```

## Referensi

### `laraliveui:button`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Gaya visual: `outline`, `primary`, `filled`, `danger`, `ghost`, `subtle` | `outline` |
| `size` | Ukuran: `base`, `sm`, `xs` | `base` |
| `color` | Warna untuk variant primary (nama warna Tailwind) | — |
| `icon` | Nama ikon di awal tombol | — |
| `icon:variant` | Varian ikon: `outline`, `solid`, `mini`, `micro` | `mini` (size `xs` → `micro`) |
| `icon:trailing` | Nama ikon di akhir tombol | — |
| `icon:class` | CSS class tambahan untuk ikon | — |
| `icon:leading` | Nama ikon di awal (alternatif) | — |
| `square` | Membuat tombol persegi | `false` |
| `inset` | Negative margin: `top`, `bottom`, `left`, `right` | — |
| `loading` | Tampilkan spinner loading | `true` (otomatis) |
| `type` | Tipe HTML: `button`, `submit` | `button` |
| `href` | URL untuk link | — |
| `align` | Posisi konten: `start`, `center`, `end` | `center` |
| `kbd` | Teks shortcut keyboard | — |

### `laraliveui:button.group`

| Slot | Deskripsi |
|------|-----------|
| default | Tombol yang akan dikelompokkan |
