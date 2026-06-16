---
sidebar_position: 6
---

# Table

Komponen tabel yang fleksibel dengan sub-komponen untuk columns, rows, cell, dan sorting.

```blade
<laraliveui:table>
    <laraliveui:table.columns>
        <laraliveui:table.column label="Nama" sortable />
        <laraliveui:table.column label="Email" />
        <laraliveui:table.column label="Aksi" align="right" />
    </laraliveui:table.columns>
    <laraliveui:table.rows>
        <laraliveui:table.row>
            <laraliveui:table.cell>John Doe</laraliveui:table.cell>
            <laraliveui:table.cell>john@example.com</laraliveui:table.cell>
            <laraliveui:table.cell align="right">
                <laraliveui:button size="sm">Edit</laraliveui:button>
            </laraliveui:table.cell>
        </laraliveui:table.row>
    </laraliveui:table.rows>
</laraliveui:table>
```

## Hover & Striped

```blade
<laraliveui:table.rows hover striped>
    <laraliveui:table.row>
        <laraliveui:table.cell>Data</laraliveui:table.cell>
    </laraliveui:table.row>
</laraliveui:table.rows>
```

## Sortable

```blade
<laraliveui:table.columns>
    <laraliveui:table.column label="Nama" sortable />
</laraliveui:table.columns>
```

## Sticky Header

```blade
<laraliveui:table.columns sticky>
    <laraliveui:table.column label="Nama" />
</laraliveui:table.columns>
```

## Alignment

```blade
<laraliveui:table.column label="Aksi" align="right" />
<laraliveui:table.cell align="center">Konten</laraliveui:table.cell>
```

## Referensi

### `laraliveui:table`

Container tabel.

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
