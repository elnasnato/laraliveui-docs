---
sidebar_position: 22
---

# Navbar

Navigasi atas untuk aplikasi.

```blade
<laraliveui:navbar>
    <laraliveui:navbar.brand>My App</laraliveui:navbar.brand>
    <laraliveui:navbar.links>
        <laraliveui:navbar.item href="/" active>Home</laraliveui:navbar.item>
        <laraliveui:navbar.item href="/about">Tentang</laraliveui:navbar.item>
        <laraliveui:navbar.item href="/contact">Kontak</laraliveui:navbar.item>
    </laraliveui:navbar.links>
</laraliveui:navbar>
```

## Referensi

### `laraliveui:navbar`

Container navbar.

### `laraliveui:navbar.brand`

Brand/logo navbar.

### `laraliveui:navbar.item`

| Prop | Deskripsi |
|------|-----------|
| `href` | URL link |
| `active` | Tandai sebagai aktif |
| `icon` | Ikon item |

### `laraliveui:navbar.badge`

Badge pada navbar.
