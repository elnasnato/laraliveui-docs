---
sidebar_position: 3
---

# Input

Komponen input yang fleksibel untuk form.

```blade
<laraliveui:input name="email" placeholder="Email" />
```

## Variant

```blade
<laraliveui:input name="email" placeholder="Email" />
<laraliveui:input name="email" placeholder="Email" variant="filled" />
```

## Ukuran

```blade
<laraliveui:input name="nama" placeholder="Nama" />
<laraliveui:input name="nama" placeholder="Nama" size="sm" />
<laraliveui:input name="nama" placeholder="Nama" size="xs" />
```

## Ikon

```blade
<laraliveui:input icon="magnifying-glass" placeholder="Cari..." />
<laraliveui:input icon="envelope" icon:trailing="check" placeholder="Email" />
```

## Tipe

```blade
<laraliveui:input type="email" placeholder="Email" />
<laraliveui:input type="password" placeholder="Password" />
<laraliveui:input type="date" />
<laraliveui:input type="number" />
```

## Clearable, Copyable, Viewable

```blade
<laraliveui:input name="nama" clearable placeholder="Dapat dihapus" />
<laraliveui:input name="link" copyable value="https://example.com" />
<laraliveui:input name="password" viewable type="password" />
```

## Expandable

```blade
<laraliveui:input name="search" expandable placeholder="Cari..." />
```

## Input Mask

```blade
<laraliveui:input mask="999-999-9999" placeholder="Telepon" />
<laraliveui:input mask="(999) 999-9999" placeholder="HP" />
```

## Disabled & Readonly

```blade
<laraliveui:input name="email" disabled value="user@example.com" />
<laraliveui:input name="email" readonly value="user@example.com" />
```

## Input Group

Gabungkan input dengan teks atau elemen sebelum/sesudah.

```blade
<laraliveui:input.group>
    <laraliveui:input.group.prefix>
        https://
    </laraliveui:input.group.prefix>
    <laraliveui:input name="site" placeholder="example.com" />
    <laraliveui:input.group.suffix>
        .com
    </laraliveui:input.group.suffix>
</laraliveui:input.group>
```

### Dengan Tombol

```blade
<laraliveui:input.group>
    <laraliveui:input name="q" placeholder="Cari..." />
    <laraliveui:button icon="magnifying-glass" />
</laraliveui:input.group>
```

## Loading

```blade
<laraliveui:input name="email" loading />
```

## Invalid

```blade
<laraliveui:input name="email" invalid />
```

## Referensi

### `laraliveui:input`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Gaya: `outline`, `filled` | `outline` |
| `size` | Ukuran: `base`, `sm`, `xs` | `base` |
| `type` | Tipe HTML input | `text` |
| `name` | Nama input | `wire:model` pertama |
| `placeholder` | Placeholder | — |
| `icon` | Nama ikon di awal | — |
| `icon:variant` | Varian ikon | `mini` |
| `icon:trailing` | Ikon di akhir | — |
| `clearable` | Tampilkan tombol hapus | — |
| `copyable` | Tampilkan tombol salin | — |
| `viewable` | Tampilkan tombol lihat (password) | — |
| `expandable` | Tampilkan tombol perluas | — |
| `loading` | Tampilkan indikator loading | — |
| `invalid` | Tandai sebagai invalid | — |
| `mask` | Input mask pattern | — |
| `mask:dynamic` | Dynamic mask | — |
| `kbd` | Shortcut keyboard | — |

### `laraliveui:input.group`

```blade
<laraliveui:input.group>
    <laraliveui:input.group.prefix>https://</laraliveui:input.group.prefix>
    <laraliveui:input name="site" />
    <laraliveui:input.group.suffix>.com</laraliveui:input.group.suffix>
</laraliveui:input.group>
```

| Slot | Deskripsi |
|------|-----------|
| default | Input, prefix, suffix, atau tombol |
