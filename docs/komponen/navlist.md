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

## Referensi

### `laraliveui:navlist.item`

| Prop | Deskripsi |
|------|-----------|
| `href` | URL link |
| `icon` | Ikon item |
| `active` | Tandai sebagai aktif |
| `badge` | Teks badge |

### `laraliveui:navlist.group`

| Prop | Deskripsi |
|------|-----------|
| `heading` | Judul group |

### `laraliveui:navlist.badge`

Badge pada navlist.
