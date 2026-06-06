---
sidebar_position: 16
---

# Toast

Notifikasi toast yang dapat diprogram dari Livewire.

```blade
<laraliveui:toast />
```

## Penggunaan dari Livewire

Tampilkan toast dari komponen Livewire:

```php
$this->toast()->success('Data berhasil disimpan!');
$this->toast()->error('Terjadi kesalahan!');
$this->toast()->warning('Periksa kembali input Anda.');
$this->toast()->info('Pembaruan tersedia.');
```

## Dengan Heading

```php
$this->toast()->success('Berhasil!', heading: 'Data tersimpan');
$this->toast()->error('Gagal memproses permintaan.', heading: 'Error');
```

## Posisi

```blade
<laraliveui:toast position="top end" />
<laraliveui:toast position="bottom end" />
<laraliveui:toast position="top start" />
<laraliveui:toast position="bottom start" />
```

## Toast Group

Untuk beberapa toast bersamaan:

```blade
<laraliveui:toast.group>
    <laraliveui:toast position="bottom end" />
    <laraliveui:toast position="top end" />
</laraliveui:toast.group>
```

## Referensi

### `laraliveui:toast`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `position` | Posisi: `bottom end`, `top end`, `bottom start`, `top start` | `bottom end` |
