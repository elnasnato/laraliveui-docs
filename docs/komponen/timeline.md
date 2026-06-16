---
sidebar_position: 37
---

# Timeline

Menampilkan urutan kejadian secara kronologis.

```blade
<laraliveui:timeline>
    <laraliveui:timeline.item title="Pendaftaran" time="2024-01-01">
        User mendaftar akun
    </laraliveui:timeline.item>
    <laraliveui:timeline.item title="Verifikasi" time="2024-01-02">
        Email diverifikasi
    </laraliveui:timeline.item>
    <laraliveui:timeline.item title="Aktif" time="2024-01-03" active>
        Akun diaktifkan
    </laraliveui:timeline.item>
</laraliveui:timeline>
```

## Posisi

```blade
<laraliveui:timeline position="left">
    ...
</laraliveui:timeline>
```

## Referensi

### `laraliveui:timeline`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `position` | Posisi garis: `left` | `left` |

### `laraliveui:timeline.item`

| Prop | Deskripsi |
|------|-----------|
| `title` | Judul item |
| `time` | Waktu/tanggal item |
| `active` | Tandai sebagai item aktif |
