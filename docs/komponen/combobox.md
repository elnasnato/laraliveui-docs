---
sidebar_position: 43
---

# Combobox

Komponen input dengan pencarian dan saran otomatis dalam dropdown.

```blade
<laraliveui:combobox name="user_id" wire:model="user">
    <laraliveui:combobox.option value="1" label="John Doe" />
    <laraliveui:combobox.option value="2" label="Jane Smith" />
    <laraliveui:combobox.option value="3" label="Bob Johnson" />
</laraliveui:combobox>
```

## Placeholder

```blade
<laraliveui:combobox name="user_id" placeholder="Pilih pengguna...">
    <laraliveui:combobox.option value="1" label="John" />
</laraliveui:combobox>
```

## Search Placeholder

```blade
<laraliveui:combobox name="user_id" search-placeholder="Cari pengguna...">
    <laraliveui:combobox.option value="1" label="John" />
</laraliveui:combobox>
```

## Clearable

```blade
<laraliveui:combobox name="user_id" clearable>
    <laraliveui:combobox.option value="1" label="John" />
</laraliveui:combobox>
```

## Posisi

```blade
<laraliveui:combobox name="user_id" position="top">
    <laraliveui:combobox.option value="1" label="John" />
</laraliveui:combobox>
```

## Error State

```blade
<laraliveui:combobox name="user_id" invalid>
    <laraliveui:combobox.option value="1" label="John" />
</laraliveui:combobox>
```

## Empty Text

```blade
<laraliveui:combobox name="user_id" empty-text="Tidak ada hasil.">
    <laraliveui:combobox.option value="1" label="John" />
</laraliveui:combobox>
```

## Referensi

### `laraliveui:combobox`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field (dari wire:model) | — |
| `placeholder` | Teks placeholder | `Select an option...` |
| `search-placeholder` | Placeholder input pencarian | `Search...` |
| `empty-text` | Teks saat tidak ada hasil | `No results found.` |
| `invalid` | Tampilkan state error | `null` |
| `size` | Ukuran: `base`, `sm`, `xs` | — |
| `clearable` | Tampilkan tombol hapus | `false` |
| `position` | Posisi dropdown: `bottom`, `top` | `bottom` |

### `laraliveui:combobox.option`

| Prop | Deskripsi |
|------|-----------|
| `value` | Nilai opsi |
| `label` | Label opsi (fallback ke slot) |
| `disabled` | Nonaktifkan opsi |
