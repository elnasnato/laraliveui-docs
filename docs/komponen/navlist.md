---
sidebar_position: 23
---

# Navlist

Navigasi sidebar dalam bentuk daftar.

```blade
<laraliveui:navlist>
    <laraliveui:navlist.item href="/" icon="home">Dashboard</laraliveui:navlist.item>
    <laraliveui:navlist.item href="/users" icon="users">Pengguna</laraliveui:navlist.item>
    <laraliveui:navlist.item href="/settings" icon="cog-6-tooth">Pengaturan</laraliveui:navlist.item>
</laraliveui:navlist>
```

## Group

```blade
<laraliveui:navlist>
    <laraliveui:navlist.group heading="Utama">
        <laraliveui:navlist.item href="/" icon="home">Dashboard</laraliveui:navlist.item>
    </laraliveui:navlist.group>
    <laraliveui:navlist.group heading="Lainnya">
        <laraliveui:navlist.item href="/settings" icon="cog-6-tooth">Settings</laraliveui:navlist.item>
    </laraliveui:navlist.group>
</laraliveui:navlist>
```

## Expandable Group

```blade
<laraliveui:navlist.group heading="Laporan" expandable>
    <laraliveui:navlist.item href="/laporan/penjualan">Penjualan</laraliveui:navlist.item>
    <laraliveui:navlist.item href="/laporan/keuangan">Keuangan</laraliveui:navlist.item>
</laraliveui:navlist.group>
```

## Variant Outline

```blade
<laraliveui:navlist variant="outline">
    <laraliveui:navlist.item href="/" icon="home">Dashboard</laraliveui:navlist.item>
</laraliveui:navlist>
```

## Referensi

### `laraliveui:navlist`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Varian: `outline` | `null` |

### `laraliveui:navlist.item`

| Prop | Deskripsi |
|------|-----------|
| `href` | URL link |
| `icon` | Ikon item |
| `active` | Tandai sebagai aktif |
| `badge` | Teks badge |
| `accent` | Gunakan warna aksen |
| `icon:trailing` | Ikon di akhir |

### `laraliveui:navlist.group`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `heading` | Judul group | `null` |
| `expandable` | Group dapat dilipat | `false` |
| `expanded` | Status default expand | `true` |

### `laraliveui:navlist.badge`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `color` | Warna badge | `zinc` |
