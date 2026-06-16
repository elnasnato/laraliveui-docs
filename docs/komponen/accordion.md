---
sidebar_position: 18
---

# Accordion

Komponen accordion untuk konten yang dapat dilipat.

```blade
<laraliveui:accordion>
    <laraliveui:accordion.item>
        <laraliveui:accordion.trigger>
            <laraliveui:heading>Bagian 1</laraliveui:heading>
        </laraliveui:accordion.trigger>
        <laraliveui:accordion.content>
            Konten bagian 1
        </laraliveui:accordion.content>
    </laraliveui:accordion.item>

    <laraliveui:accordion.item>
        <laraliveui:accordion.trigger>
            <laraliveui:heading>Bagian 2</laraliveui:heading>
        </laraliveui:accordion.trigger>
        <laraliveui:accordion.content>
            Konten bagian 2
        </laraliveui:accordion.content>
    </laraliveui:accordion.item>
</laraliveui:accordion>
```

## Multiple

Izinkan beberapa item terbuka bersamaan:

```blade
<laraliveui:accordion multiple>
    <laraliveui:accordion.item>
        ...
    </laraliveui:accordion.item>
</laraliveui:accordion>
```

## Collapsible

Set `collapsible="false"` untuk mencegah item ditutup saat diklik kembali:

```blade
<laraliveui:accordion :collapsible="false">
    <laraliveui:accordion.item>
        ...
    </laraliveui:accordion.item>
</laraliveui:accordion>
```

## Default Open

Tentukan item yang terbuka secara default:

```blade
<laraliveui:accordion :default-open="[0]">
    <laraliveui:accordion.item>
        ...
    </laraliveui:accordion.item>
</laraliveui:accordion>
```

## Referensi

### `laraliveui:accordion`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `multiple` | Izinkan multiple item terbuka | `false` |
| `collapsible` | Izinkan item ditutup kembali | `true` |
| `default-open` | Index item yang terbuka default | `null` |

### `laraliveui:accordion.item`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `id` | ID item (otomatis jika tidak diisi) | `null` |

### `laraliveui:accordion.trigger`

Trigger untuk membuka/tutup item. Tidak memiliki props.

### `laraliveui:accordion.content`

Konten yang akan ditampilkan saat item terbuka. Tidak memiliki props.
