---
sidebar_position: 21
---

# Breadcrumbs

Navigasi breadcrumb untuk menunjukkan hierarki halaman.

```blade
<laraliveui:breadcrumbs>
    <laraliveui:breadcrumbs.item href="/">Home</laraliveui:breadcrumbs.item>
    <laraliveui:breadcrumbs.item href="/users">Users</laraliveui:breadcrumbs.item>
    <laraliveui:breadcrumbs.item active>Edit Profile</laraliveui:breadcrumbs.item>
</laraliveui:breadcrumbs>
```

## Referensi

### `laraliveui:breadcrumbs`

Container breadcrumbs. Tidak memiliki props.

| Slot | Deskripsi |
|------|-----------|
| default | Item breadcrumbs |

### `laraliveui:breadcrumbs.item`

| Prop | Deskripsi |
|------|-----------|
| `href` | URL link |
| `active` | Tandai sebagai halaman aktif |
