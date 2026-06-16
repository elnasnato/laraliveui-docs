---
sidebar_position: 38
---

# Layout

Komponen layout untuk struktur halaman yang konsisten.

## Layout Dasar

```blade
<laraliveui:layout>
    <x-slot:header>
        <laraliveui:navbar>
            <laraliveui:navbar.item href="/">My App</laraliveui:navbar.item>
        </laraliveui:navbar>
    </x-slot:header>

    <x-slot:sidebar>
        <laraliveui:navlist>
            <laraliveui:navlist.item href="/" icon="home">Dashboard</laraliveui:navlist.item>
        </laraliveui:navlist>
    </x-slot:sidebar>

    <x-slot:main>
        Konten utama
    </x-slot:main>
</laraliveui:layout>
```

## Sub-komponen Layout

Layout terdiri dari beberapa sub-komponen:

- `laraliveui:layout.header` — Header layout
- `laraliveui:layout.sidebar` — Sidebar layout
- `laraliveui:layout.main` — Konten utama
- `laraliveui:layout.footer` — Footer layout

## Container

```blade
<laraliveui:container>
    Konten dengan max-width yang terbatas.
</laraliveui:container>
```

## Spacer

```blade
<laraliveui:spacer />
```

Gunakan untuk mendorong konten ke kanan dalam flex container:

```blade
<div class="flex">
    <laraliveui:heading>Judul</laraliveui:heading>
    <laraliveui:spacer />
    <laraliveui:button variant="primary">Simpan</laraliveui:button>
</div>
```

## Referensi

### `laraliveui:container`

Container dengan max-width. Tidak memiliki props.

### `laraliveui:spacer`

Spacer fleksibel. Tidak memiliki props.

### `laraliveui:header`

Header layout. Tidak memiliki props.

### `laraliveui:sidebar`

Sidebar layout.

| Sub-komponen | Deskripsi |
|-------------|-----------|
| `sidebar.brand` | Brand/logo |
| `sidebar.nav` | Navigasi sidebar |
| `sidebar.item` | Item navigasi dengan `href`, `icon`, `active` |
| `sidebar.group` | Group item dengan `heading` |
| `sidebar.search` | Pencarian sidebar |
| `sidebar.profile` | Profil pengguna |
| `sidebar.collapse` | Tombol collapse |
| `sidebar.toggle` | Tombol toggle (mobile) |
| `sidebar.spacer` | Spacer fleksibel |
| `sidebar.header` | Header khusus sidebar |
| `sidebar.backdrop` | Backdrop untuk mobile |

### `laraliveui:main`

Konten utama layout. Tidak memiliki props.

### `laraliveui:footer`

Footer layout. Tidak memiliki props.
