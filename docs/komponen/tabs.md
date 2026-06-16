---
sidebar_position: 15
---

# Tabs

Komponen tab untuk navigasi konten.

```blade
<laraliveui:tabs>
    <laraliveui:tabs.group>
        <laraliveui:tabs.tab name="detail">Detail</laraliveui:tabs.tab>
        <laraliveui:tabs.tab name="riwayat">Riwayat</laraliveui:tabs.tab>
    </laraliveui:tabs.group>

    <laraliveui:tabs.panel name="detail">Konten detail</laraliveui:tabs.panel>
    <laraliveui:tabs.panel name="riwayat">Konten riwayat</laraliveui:tabs.panel>
</laraliveui:tabs>
```

## Selected Default

```blade
<laraliveui:tabs selected="riwayat">
    <laraliveui:tabs.group>
        <laraliveui:tabs.tab name="detail">Detail</laraliveui:tabs.tab>
        <laraliveui:tabs.tab name="riwayat">Riwayat</laraliveui:tabs.tab>
    </laraliveui:tabs.group>
    <laraliveui:tabs.panel name="riwayat">Konten riwayat</laraliveui:tabs.panel>
</laraliveui:tabs>
```

## Variant Pills

```blade
<laraliveui:tabs>
    <laraliveui:tabs.group variant="pills">
        <laraliveui:tabs.tab name="a">Tab A</laraliveui:tabs.tab>
        <laraliveui:tabs.tab name="b">Tab B</laraliveui:tabs.tab>
    </laraliveui:tabs.group>
</laraliveui:tabs>
```

## Referensi

### `laraliveui:tabs`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `selected` | Tab yang aktif secara default | `null` |
| `variant` | Varian: `tabs` | `tabs` |

### `laraliveui:tabs.group`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Varian: `tabs`, `pills` | `tabs` |

### `laraliveui:tabs.tab`

| Prop | Deskripsi |
|------|-----------|
| `name` | Identifikasi tab (untuk panel) |

### `laraliveui:tabs.panel`

| Prop | Deskripsi |
|------|-----------|
| `name` | Nama panel (cocokkan dengan tab) |
