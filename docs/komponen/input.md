---
sidebar_position: 3
---

# Input

Komponen input yang fleksibel untuk form.

```blade
<laraliveui:input name="email" placeholder="Email" />
```

## Variant

Outline Filled

```blade
<laraliveui:input name="email" placeholder="Email" />
<laraliveui:input name="email" placeholder="Email" variant="filled" />
```

## Ukuran

Default Small Extra small

```blade
<laraliveui:input name="nama" placeholder="Nama" />
<laraliveui:input name="nama" placeholder="Nama" size="sm" />
<laraliveui:input name="nama" placeholder="Nama" size="xs" />
```

## Ikon

Ikon di awal dan akhir input.

```blade
<laraliveui:input icon="magnifying-glass" placeholder="Cari..." />
<laraliveui:input icon="envelope" placeholder="Email" icon:trailing="check-circle" />
<laraliveui:input icon="user" placeholder="Username" icon:variant="outline" />
```

## Input dengan Label

```blade
<laraliveui:input name="email" label="Email" placeholder="your@email.com" />
```

## Error State

```blade
<laraliveui:input name="email" label="Email" error="Email harus diisi" />
```

## Loading State

```blade
<laraliveui:input name="nama" wire:model.live="nama" />
<laraliveui:input name="nama" :loading="true" />
```

## Clearable

```blade
<laraliveui:input name="cari" placeholder="Cari..." clearable />
```

## Copyable

```blade
<laraliveui:input name="token" value="abc123" copyable />
```

## Viewable (Password)

```blade
<laraliveui:input type="password" name="password" viewable />
```

## Expandable

```blade
<laraliveui:input name="cari" placeholder="Cari..." expandable />
```

## Mask / Input Mask

```blade
<laraliveui:input name="phone" placeholder="+62 ___ ____" mask="+62 999 9999" />
<laraliveui:input name="dynamic" mask:dynamic="$money($input, ',', 2)" />
```

## Keyboard Shortcut

```blade
<laraliveui:input name="cari" placeholder="Cari..." kbd="⌘K" />
```

## Sebagai Button

```blade
<laraliveui:input as="button" placeholder="Cari..." icon="magnifying-glass" kbd="⌘K" />
```

## Input Group

Gabungkan input dengan elemen lain.

```blade
<laraliveui:input.group>
    <laraliveui:input.group.prefix>https://</laraliveui:input.group.prefix>
    <laraliveui:input name="url" placeholder="example.com" />
    <laraliveui:input.group.suffix>.com</laraliveui:input.group.suffix>
</laraliveui:input.group>
```

Dengan tombol:

```blade
<laraliveui:input.group>
    <laraliveui:input name="cari" placeholder="Cari..." />
    <laraliveui:button icon="magnifying-glass" />
</laraliveui:input.group>
```

## Tipe File

```blade
<laraliveui:input type="file" name="dokumen" />
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
| `icon:variant` | Varian ikon: `outline`, `solid`, `mini`, `micro` | `mini` |
| `icon:trailing` | Nama ikon di akhir | — |
| `icon:class` | CSS class untuk ikon | — |
| `clearable` | Tampilkan tombol hapus | `false` |
| `copyable` | Tampilkan tombol salin | `false` |
| `viewable` | Tampilkan tombol lihat (password) | `false` |
| `expandable` | Tampilkan tombol perluas | `false` |
| `loading` | Tampilkan indikator loading | otomatis |
| `invalid` | Tandai sebagai invalid | — |
| `kbd` | Tampilkan shortcut keyboard | — |
| `mask` | Input mask pattern | — |
| `mask:dynamic` | Dynamic input mask | — |
| `label` | Label input (via with-field) | — |
| `error` | Pesan error (via with-field) | — |
| `badge` | Badge pada label | — |
| `description` | Deskripsi (via with-field) | — |
| `as` | Render sebagai `button` | — |
| `class:input` | CSS class tambahan untuk input | — |

### `laraliveui:input.group`

`prefix` / `suffix` untuk menambahkan teks/elemen sebelum/sesudah input.
