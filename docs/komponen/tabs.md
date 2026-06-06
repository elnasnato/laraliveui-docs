---
sidebar_position: 15
---

# Tabs

Komponen tab untuk navigasi konten.

```blade
<laraliveui:tabs>
    <laraliveui:tabs.tabs>
        <laraliveui:tabs.tab name="detail">Detail</laraliveui:tabs.tab>
        <laraliveui:tabs.tab name="riwayat">Riwayat</laraliveui:tabs.tab>
        <laraliveui:tabs.tab name="dokumen">Dokumen</laraliveui:tabs.tab>
    </laraliveui:tabs.tabs>

    <laraliveui:tabs.panel name="detail">Konten detail</laraliveui:tabs.panel>
    <laraliveui:tabs.panel name="riwayat">Konten riwayat</laraliveui:tabs.panel>
    <laraliveui:tabs.panel name="dokumen">Konten dokumen</laraliveui:tabs.panel>
</laraliveui:tabs>
```

## Selected Default

```blade
<laraliveui:tabs selected="riwayat">
    <laraliveui:tabs.tab name="detail">Detail</laraliveui:tabs.tab>
    <laraliveui:tabs.tab name="riwayat">Riwayat</laraliveui:tabs.tab>
    <laraliveui:tabs.panel name="riwayat">Konten riwayat</laraliveui:tabs.panel>
</laraliveui:tabs>
```

## Referensi

### `laraliveui:tabs`

| Prop | Deskripsi |
|------|-----------|
| `selected` | Tab yang aktif secara default |

### `laraliveui:tabs.tab`

| Prop | Deskripsi |
|------|-----------|
| `name` | Identifikasi tab (untuk panel) |

### `laraliveui:tabs.panel`

| Prop | Deskripsi |
|------|-----------|
| `name` | Nama panel (cocokkan dengan tab) |
