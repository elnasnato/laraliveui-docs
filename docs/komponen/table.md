---
sidebar_position: 6
---

# Table

Komponen tabel yang fleksibel dengan sub-komponen untuk columns, rows, cell, dan sorting.

```blade
<laraliveui:table>
    <laraliveui:table.columns>
        <laraliveui:table.column label="Nama" sortable />
        <laraliveui:table.column label="Email" sortable />
        <laraliveui:table.column label="Role" />
        <laraliveui:table.column label="Aksi" align="right" />
    </laraliveui:table.columns>
    <laraliveui:table.rows>
        <laraliveui:table.row>
            <laraliveui:table.cell>John Doe</laraliveui:table.cell>
            <laraliveui:table.cell>john@example.com</laraliveui:table.cell>
            <laraliveui:table.cell>
                <laraliveui:badge>Admin</laraliveui:badge>
            </laraliveui:table.cell>
            <laraliveui:table.cell align="right">
                <laraliveui:button size="sm">Edit</laraliveui:button>
            </laraliveui:table.cell>
        </laraliveui:table.row>
    </laraliveui:table.rows>
</laraliveui:table>
```

## Hover & Striped

```blade
<laraliveui:table>
    <laraliveui:table.columns sticky>
        <laraliveui:table.column label="Nama" />
        <laraliveui:table.column label="Email" />
    </laraliveui:table.columns>
    <laraliveui:table.rows hover>
        <laraliveui:table.row hover striped>...</laraliveui:table.row>
    </laraliveui:table.rows>
</laraliveui:table>
```

## Sortable

```blade
<laraliveui:table>
    <laraliveui:table.columns>
        <laraliveui:table.column label="Nama" sortable />
    </laraliveui:table.columns>
    <laraliveui:table.rows>
        @foreach ($users as $user)
            <laraliveui:table.row>
                <laraliveui:table.cell>
                    <laraliveui:table.sortable direction="asc">
                        {{ $user->name }}
                    </laraliveui:table.sortable>
                </laraliveui:table.cell>
            </laraliveui:table.row>
        @endforeach
    </laraliveui:table.rows>
</laraliveui:table>
```

## Sticky Header

```blade
<laraliveui:table.columns sticky>
    <laraliveui:table.column label="Nama" />
</laraliveui:table.columns>
```

## Lebar Kolom

```blade
<laraliveui:table.column label="Nama" width="200px" />
```

## Alignment

```blade
<laraliveui:table.column label="Aksi" align="right" />
<laraliveui:table.cell align="center">Konten</laraliveui:table.cell>
<laraliveui:table.cell align="right">Rp 100.000</laraliveui:table.cell>
```

## Referensi

### `laraliveui:table`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama tabel | — |

### `laraliveui:table.columns`

| Prop | Deskripsi |
|------|-----------|
| `sticky` | Header tetap saat scroll |

### `laraliveui:table.column`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `label` | Teks header kolom | — |
| `name` | Nama kolom | — |
| `sortable` | Tampilkan tombol sort | `false` |
| `width` | Lebar kolom (CSS) | — |
| `align` | Alignment: `left`, `center`, `right` | `left` |

### `laraliveui:table.rows`

| Prop | Deskripsi |
|------|-----------|
| `hover` | Efek hover pada row |
| `striped` | Efek striped (ganjil/genap) |

### `laraliveui:table.row`

| Prop | Deskripsi |
|------|-----------|
| `hover` | Efek hover |
| `striped` | Efek striped |

### `laraliveui:table.cell`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `align` | Alignment: `left`, `center`, `right` | `left` |

### `laraliveui:table.sortable`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama kolom | — |
| `direction` | Arah sort: `asc`, `desc` | `asc` |
