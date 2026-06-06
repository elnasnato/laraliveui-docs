---
sidebar_position: 40
---

# Command

Command palette untuk navigasi dan pencarian cepat.

```blade
<laraliveui:command>
    Konten command palette
</laraliveui:command>
```

Command palette biasanya dikombinasikan dengan modal:

```blade
<laraliveui:modal name="command" variant="bare">
    <laraliveui:command>
        <laraliveui:input
            name="cari"
            placeholder="Cari perintah..."
            icon="magnifying-glass"
        />
        <laraliveui:menu>
            <laraliveui:menu.heading>Navigasi</laraliveui:menu.heading>
            <laraliveui:menu.item icon="home">Dashboard</laraliveui:menu.item>
            <laraliveui:menu.item icon="users">Pengguna</laraliveui:menu.item>
            <laraliveui:menu.separator />
            <laraliveui:menu.heading>Aksi</laraliveui:menu.heading>
            <laraliveui:menu.item icon="plus">Buat Baru</laraliveui:menu.item>
        </laraliveui:menu>
    </laraliveui:command>
</laraliveui:modal>
```
