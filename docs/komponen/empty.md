---
sidebar_position: 46
---

# Empty

Komponen state kosong untuk menampilkan pesan ketika tidak ada data.

```blade
<laraliveui:empty
    title="Tidak ada data"
    description="Belum ada data yang tersedia untuk ditampilkan."
/>
```

## Dengan Icon

```blade
<laraliveui:empty
    title="Tidak ada hasil"
    description="Coba ubah kata kunci pencarian Anda."
    icon="magnifying-glass"
/>
```

## Dengan Aksi

```blade
<laraliveui:empty
    title="Belum ada pengguna"
    description="Tambahkan pengguna pertama Anda untuk memulai."
    icon="users"
>
    <x-slot:action>
        <laraliveui:button variant="primary">Tambah Pengguna</laraliveui:button>
    </x-slot:action>
</laraliveui:empty>
```

## Referensi

### `laraliveui:empty`

| Prop | Deskripsi |
|------|-----------|
| `icon` | Nama ikon |
| `title` | Judul state kosong |
| `description` | Deskripsi state kosong |

| Slot | Deskripsi |
|------|-----------|
| default | Konten kustom |
| `action` | Tombol aksi |
