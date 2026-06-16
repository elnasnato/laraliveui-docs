---
sidebar_position: 9
---

# Callout

Komponen callout untuk menampilkan informasi, peringatan, atau notifikasi yang menonjol.

```blade
<laraliveui:callout icon="information-circle" heading="Info">
    Sistem akan maintenance pada pukul 22:00 WIB.
</laraliveui:callout>
```

## Variant

Gunakan variant untuk mengatur warna otomatis:

```blade
<laraliveui:callout variant="success" icon="check-circle" heading="Berhasil">
    Data berhasil disimpan!
</laraliveui:callout>

<laraliveui:callout variant="danger" icon="exclamation-circle" heading="Error">
    Gagal menyimpan data.
</laraliveui:callout>

<laraliveui:callout variant="warning" icon="exclamation-triangle" heading="Perhatian">
    Kuota penyimpanan hampir penuh.
</laraliveui:callout>
```

## Warna

Atau atur warna secara manual:

```blade
<laraliveui:callout color="blue" icon="information-circle">Info</laraliveui:callout>
<laraliveui:callout color="green" icon="check-circle">Success</laraliveui:callout>
```

## Heading & Text Props

```blade
<laraliveui:callout
    icon="check-circle"
    heading="Selamat!"
    text="Akun Anda berhasil dibuat."
/>
```

## Dengan Actions

```blade
<laraliveui:callout icon="sparkles" heading="Update Tersedia">
    <x-slot:actions>
        <laraliveui:button size="sm" variant="primary">Update</laraliveui:button>
    </x-slot:actions>
</laraliveui:callout>
```

## Inline

```blade
<laraliveui:callout icon="information-circle" inline>
    Callout inline dengan actions di samping.
    <x-slot:actions>
        <laraliveui:button size="sm">Aksi</laraliveui:button>
    </x-slot:actions>
</laraliveui:callout>
```

## Custom Icon

```blade
<laraliveui:callout>
    <x-slot:icon>
        <svg class="size-5 text-blue-500">...</svg>
    </x-slot:icon>
    Konten callout
</laraliveui:callout>
```

## Referensi

### `laraliveui:callout`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `color` | Warna (nama Tailwind) | `white` |
| `variant` | Varian: `success`, `danger`, `warning`, `secondary` | `null` |
| `icon` | Nama ikon | `null` |
| `icon:variant` | Varian ikon | `mini` |
| `heading` | Teks heading | `null` |
| `text` | Teks paragraf | `null` |
| `inline` | Layout inline (actions di samping) | `null` |

| Slot | Deskripsi |
|------|-----------|
| default | Konten utama |
| `heading` | Heading slot |
| `text` | Teks slot |
| `icon` | Ikon slot |
| `actions` | Tombol aksi |
| `controls` | Kontrol tambahan |

### `laraliveui:callout.heading`

Heading callout. Tidak memiliki props.

### `laraliveui:callout.text`

Teks callout. Tidak memiliki props.

### `laraliveui:callout.link`

Link dalam callout. Tidak memiliki props.
