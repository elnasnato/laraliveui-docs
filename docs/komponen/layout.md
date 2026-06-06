---
sidebar_position: 38
---

# Layout

Komponen layout untuk struktur halaman yang konsisten.

## Layout Dasar

```blade
<laraliveui:layout>
    <laraliveui:layout.header>
        <laraliveui:navbar>
            <laraliveui:navbar.brand>My App</laraliveui:navbar.brand>
        </laraliveui:navbar>
    </laraliveui:layout.header>

    <laraliveui:layout.sidebar>
        <laraliveui:navlist>
            <laraliveui:navlist.item href="/" icon="home">Dashboard</laraliveui:navlist.item>
            <laraliveui:navlist.item href="/users" icon="users">Pengguna</laraliveui:navlist.item>
        </laraliveui:navlist>
    </laraliveui:layout.sidebar>

    <laraliveui:layout.main>
        @yield('content')
    </laraliveui:layout.main>

    <laraliveui:layout.footer>
        &copy; 2024 My App
    </laraliveui:layout.footer>
</laraliveui:layout>
```

## Sidebar

Sidebar yang responsif dengan berbagai sub-komponen:

```blade
<laraliveui:sidebar>
    <laraliveui:sidebar.brand>My App</laraliveui:sidebar.brand>
    <laraliveui:sidebar.search />
    <laraliveui:sidebar.nav>
        <laraliveui:sidebar.item href="/" icon="home">Dashboard</laraliveui:sidebar.item>
    </laraliveui:sidebar.nav>
    <laraliveui:sidebar.group heading="Pengaturan">
        <laraliveui:sidebar.item href="/settings" icon="cog-6-tooth">Settings</laraliveui:sidebar.item>
    </laraliveui:sidebar.group>
    <laraliveui:sidebar.spacer />
    <laraliveui:sidebar.profile />
    <laraliveui:sidebar.collapse />
    <laraliveui:sidebar.toggle />
</laraliveui:sidebar>
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

## Container

```blade
<laraliveui:container>
    Konten dengan max-width yang terbatas.
</laraliveui:container>
```

## Aside

```blade
<laraliveui:aside>
    Konten sidebar tambahan.
</laraliveui:aside>
```

## Referensi

### `laraliveui:sidebar`

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
