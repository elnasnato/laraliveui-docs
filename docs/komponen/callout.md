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

<laraliveui:callout variant="secondary" icon="information-circle" heading="Info">
    Pembaruan tersedia.
</laraliveui:callout>
```

## Warna

Atau atur warna secara manual:

```blade
<laraliveui:callout color="blue" icon="information-circle">Info</laraliveui:callout>
<laraliveui:callout color="green" icon="check-circle">Success</laraliveui:callout>
<laraliveui:callout color="red" icon="x-circle">Error</laraliveui:callout>
<laraliveui:callout color="amber" icon="exclamation-triangle">Warning</laraliveui:callout>
<laraliveui:callout color="purple" icon="star">Promo</laraliveui:callout>
```

## Dengan Actions

```blade
<laraliveui:callout icon="sparkles" heading="Update Tersedia">
    Versi baru LaraLiveUI telah dirilis.
    <x-slot:actions>
        <laraliveui:button size="sm" variant="primary">Update</laraliveui:button>
        <laraliveui:button size="sm" variant="ghost">Nanti</laraliveui:button>
    </x-slot:actions>
</laraliveui:callout>
```

## Heading & Text Props

```blade
<laraliveui:callout
    icon="check-circle"
    heading="Selamat!"
    text="Akun Anda berhasil dibuat."
/>
```

## Dengan Custom Icon

```blade
<laraliveui:callout>
    <x-slot:icon>
        <svg class="size-5 text-blue-500">...</svg>
    </x-slot:icon>
    Konten callout
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

## Referensi

### `laraliveui:callout`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Varian: `success`, `danger`, `warning`, `secondary` | — |
| `color` | Warna (nama Tailwind) | `white` |
| `icon` | Nama ikon | — |
| `icon:variant` | Varian ikon | `mini` |
| `heading` | Teks heading | — |
| `text` | Teks paragraf | — |
| `inline` | Layout inline (actions di samping) | `false` |

| Slot | Deskripsi |
|------|-----------|
| default | Konten utama |
| `heading` | Heading slot |
| `text` | Teks slot |
| `icon` | Ikon slot |
| `actions` | Tombol aksi |
| `controls` | Kontrol tambahan |
