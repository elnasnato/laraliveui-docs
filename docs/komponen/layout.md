---
sidebar_position: 6
---

# Layout

Komponen layout untuk struktur halaman.

## Layout

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

## Card

```blade
<laraliveui:card>
    <laraliveui:card.header>
        <laraliveui:card.title>Judul Card</laraliveui:card.title>
        <laraliveui:card.description>Deskripsi card</laraliveui:card.description>
    </laraliveui:card.header>
    <laraliveui:card.content>
        Konten card
    </laraliveui:card.content>
    <laraliveui:card.footer>
        <laraliveui:button variant="primary">Simpan</laraliveui:button>
    </laraliveui:card.footer>
</laraliveui:card>
```

## Separator

```blade
<laraliveui:separator />
<laraliveui:separator label="Atau" />
```
