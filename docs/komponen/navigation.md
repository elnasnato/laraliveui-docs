---
sidebar_position: 3
---

# Navigation

Komponen navigasi untuk menu dan pagination.

## Dropdown

```blade
<laraliveui:dropdown>
    <laraliveui:dropdown.trigger>
        <laraliveui:button variant="outline">Pilih Menu</laraliveui:button>
    </laraliveui:dropdown.trigger>
    <laraliveui:menu>
        <laraliveui:menu.item>Dashboard</laraliveui:menu.item>
        <laraliveui:menu.item>Pengaturan</laraliveui:menu.item>
        <laraliveui:menu.separator />
        <laraliveui:menu.item variant="danger">Keluar</laraliveui:menu.item>
    </laraliveui:menu>
</laraliveui:dropdown>
```

## Navbar

```blade
<laraliveui:navbar>
    <laraliveui:navbar.brand>My App</laraliveui:navbar.brand>
    <laraliveui:navbar.links>
        <laraliveui:navbar.link href="/" active>Home</laraliveui:navbar.link>
        <laraliveui:navbar.link href="/about">Tentang</laraliveui:navbar.link>
        <laraliveui:navbar.link href="/contact">Kontak</laraliveui:navbar.link>
    </laraliveui:navbar.links>
</laraliveui:navbar>
```

## Navlist

```blade
<laraliveui:navlist>
    <laraliveui:navlist.item href="/" icon="home">Dashboard</laraliveui:navlist.item>
    <laraliveui:navlist.item href="/users" icon="users">Pengguna</laraliveui:navlist.item>
    <laraliveui:navlist.item href="/settings" icon="cog">Pengaturan</laraliveui:navlist.item>
</laraliveui:navlist>
```

## Breadcrumbs

```blade
<laraliveui:breadcrumbs>
    <laraliveui:breadcrumbs.item href="/">Home</laraliveui:breadcrumbs.item>
    <laraliveui:breadcrumbs.item href="/users">Users</laraliveui:breadcrumbs.item>
    <laraliveui:breadcrumbs.item active>Edit Profile</laraliveui:breadcrumbs.item>
</laraliveui:breadcrumbs>
```

## Tabs

```blade
<laraliveui:tabs>
    <laraliveui:tabs.item active>Detail</laraliveui:tabs.item>
    <laraliveui:tabs.item>Riwayat</laraliveui:tabs.item>
    <laraliveui:tabs.item>Dokumen</laraliveui:tabs.item>
</laraliveui:tabs>
```

## Pagination

```blade
{{ $users->links() }}
<!-- atau -->
<laraliveui:pagination :paginator="$users" />
```
