---
sidebar_position: 43
---

# Alert / Error / Label / Legend / Description

Komponen utilitas untuk form.

## Alert

```blade
<laraliveui:alert variant="success" dismissible>
    Data berhasil disimpan!
</laraliveui:alert>

<laraliveui:alert variant="danger">
    Terjadi kesalahan!
</laraliveui:alert>

<laraliveui:alert variant="warning">
    Periksa kembali input Anda.
</laraliveui:alert>

<laraliveui:alert variant="info">
    Info: Maintenance pada pukul 22:00.
</laraliveui:alert>
```

## Error

Menampilkan error untuk field tertentu:

```blade
<laraliveui:error name="email" />
<laraliveui:error :name="$field" :bag="$bag" />
```

| Prop | Deskripsi |
|------|-----------|
| `name` | Nama field |
| `bag` | Error bag |
| `message` | Pesan kustom |
| `icon` | Tampilkan ikon |
| `nested` | Cari error nested |
| `deep` | Cari error deep |

## Label

Label standalone:

```blade
<laraliveui:label for="email">Email</laraliveui:label>
```

## Legend

Legend untuk fieldset:

```blade
<laraliveui:legend>Informasi Pribadi</laraliveui:legend>
```

## Description

Deskripsi untuk field:

```blade
<laraliveui:description>Kami tidak akan membagikan email Anda.</laraliveui:description>
```

## Fieldset

```blade
<laraliveui:fieldset>
    <laraliveui:legend>Data Diri</laraliveui:legend>
    <laraliveui:input name="nama" label="Nama" />
    <laraliveui:input name="email" label="Email" />
</laraliveui:fieldset>
```
