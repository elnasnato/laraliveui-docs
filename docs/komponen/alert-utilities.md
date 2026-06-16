---
sidebar_position: 43
---

# Field Utilities

Komponen utilitas untuk form.

## Field

Wrapper untuk input dengan label, deskripsi, dan error.

```blade
<laraliveui:field name="email" label="Email">
    <laraliveui:input name="email" placeholder="your@email.com" />
</laraliveui:field>
```

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Varian: `block`, `bare`, `inline` | `block` |

## Label

```blade
<laraliveui:label>Email</laraliveui:label>
<laraliveui:label badge="Wajib">Email</laraliveui:label>
```

| Prop | Deskripsi |
|------|-----------|
| `badge` | Badge pada label |
| `aside` | Konten aside pada label |
| `trailing` | Konten trailing pada label |

## Description

```blade
<laraliveui:description>Kami tidak akan membagikan email Anda.</laraliveui:description>
```

Tidak memiliki props.

## Error

```blade
<laraliveui:error name="email" />
```

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field | `null` |
| `bag` | Error bag | `default` |
| `message` | Pesan kustom | `null` |
| `icon` | Nama ikon | `exclamation-triangle` |
| `nested` | Cari error nested | `true` |
| `deep` | Cari error deep | `true` |

## Legend

```blade
<laraliveui:legend>Informasi Pribadi</laraliveui:legend>
```

Tidak memiliki props.

## Fieldset

```blade
<laraliveui:fieldset legend="Data Diri">
    <laraliveui:input name="nama" label="Nama" />
    <laraliveui:input name="email" label="Email" />
</laraliveui:fieldset>
```

| Prop | Deskripsi |
|------|-----------|
| `legend` | Teks legend |
| `description` | Teks deskripsi |
