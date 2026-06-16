---
sidebar_position: 22
---

# Navbar

Navigasi atas untuk aplikasi.

```blade
<laraliveui:navbar>
    <laraliveui:navbar.item href="/" active>Home</laraliveui:navbar.item>
    <laraliveui:navbar.item href="/about">Tentang</laraliveui:navbar.item>
    <laraliveui:navbar.item href="/contact">Kontak</laraliveui:navbar.item>
</laraliveui:navbar>
```

## Scrollable

```blade
<laraliveui:navbar scrollable>
    <laraliveui:navbar.item href="/">Home</laraliveui:navbar.item>
    <laraliveui:navbar.item href="/about">Tentang</laraliveui:navbar.item>
</laraliveui:navbar>
```

## Referensi

### `laraliveui:navbar`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `scrollable` | Aktifkan scroll horizontal | `false` |
| `variant` | Varian navbar | `null` |

### `laraliveui:navbar.item`

| Prop | Deskripsi |
|------|-----------|
| `href` | URL link |
| `active` | Tandai sebagai aktif |
| `icon` | Ikon item |
| `icon:trailing` | Ikon di akhir |
| `badge` | Teks badge |
| `accent` | Gunakan warna aksen |
