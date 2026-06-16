---
sidebar_position: 13
---

# Select

Dropdown select dengan variant dan fitur searchable.

```blade
<laraliveui:select name="role">
    <laraliveui:select.option value="admin">Administrator</laraliveui:select.option>
    <laraliveui:select.option value="editor">Editor</laraliveui:select.option>
    <laraliveui:select.option value="viewer">Viewer</laraliveui:select.option>
</laraliveui:select>
```

## Searchable

```blade
<laraliveui:select name="negara" searchable placeholder="Cari negara...">
    <laraliveui:select.option value="id">Indonesia</laraliveui:select.option>
</laraliveui:select>
```

## Multiple

```blade
<laraliveui:select name="roles" multiple>
    <laraliveui:select.option value="admin">Admin</laraliveui:select.option>
    <laraliveui:select.option value="editor">Editor</laraliveui:select.option>
</laraliveui:select>
```

## Clearable

```blade
<laraliveui:select name="status" clearable placeholder="Pilih status">
    <laraliveui:select.option value="active">Aktif</laraliveui:select.option>
</laraliveui:select>
```

## Referensi

### `laraliveui:select`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Varian: `default` | `default` |
| `name` | Nama field | — |
| `searchable` | Aktifkan pencarian | — |
| `clearable` | Tampilkan tombol hapus | — |
| `multiple` | Pilihan ganda | — |
| `placeholder` | Teks placeholder | — |

### `laraliveui:select.option`

Option dalam select.
