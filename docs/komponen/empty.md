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
    <laraliveui:slot name="action">
        <laraliveui:button variant="primary">Tambah Pengguna</laraliveui:button>
    </laraliveui:slot>
</laraliveui:empty>
```

## Custom Content

```blade
<laraliveui:empty icon="inbox">
    <p class="text-sm text-zinc-500">Custom konten di sini</p>
</laraliveui:empty>
```

## Referensi

### `laraliveui:empty`

| Prop | Deskripsi |
|------|-----------|
| `title` | Judul state kosong |
| `description` | Deskripsi state kosong |
| `action` | Slot untuk tombol aksi |
| `icon` | Nama ikon yang ditampilkan |
