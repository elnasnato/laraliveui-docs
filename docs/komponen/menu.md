---
sidebar_position: 5
---

# Menu

Menu adalah komponen turunan yang digunakan di dalam dropdown, popover, dan context menu.

## Menu Item

```blade
<laraliveui:menu>
    <laraliveui:menu.item icon="user">Profile</laraliveui:menu.item>
    <laraliveui:menu.item icon="cog-6-tooth">Settings</laraliveui:menu.item>
    <laraliveui:menu.separator />
    <laraliveui:menu.item icon="arrow-left-start-on-rectangle">Logout</laraliveui:menu.item>
</laraliveui:menu>
```

### Variant Danger

```blade
<laraliveui:menu.item icon="trash" variant="danger">Hapus</laraliveui:menu.item>
```

### Item dengan Ikon Trailing & Suffix

```blade
<laraliveui:menu.item icon="pencil-square" icon:trailing="chevron-right">Edit</laraliveui:menu.item>
<laraliveui:menu.item icon="user" kbd="⌘P">Profile</laraliveui:menu.item>
```

## Menu Heading

```blade
<laraliveui:menu>
    <laraliveui:menu.heading>Pengguna</laraliveui:menu.heading>
    <laraliveui:menu.item>Tambah Pengguna</laraliveui:menu.item>
    <laraliveui:menu.item>Daftar Pengguna</laraliveui:menu.item>
</laraliveui:menu>
```

## Menu Group

```blade
<laraliveui:menu>
    <laraliveui:menu.group heading="Akun">
        <laraliveui:menu.item>Profile</laraliveui:menu.item>
        <laraliveui:menu.item>Settings</laraliveui:menu.item>
    </laraliveui:menu.group>
    <laraliveui:menu.group heading="Lainnya">
        <laraliveui:menu.item>Bantuan</laraliveui:menu.item>
        <laraliveui:menu.item>Logout</laraliveui:menu.item>
    </laraliveui:menu.group>
</laraliveui:menu>
```

## Menu Separator

```blade
<laraliveui:menu.separator />
```

## Submenu

```blade
<laraliveui:menu>
    <laraliveui:menu.submenu heading="File" icon="folder">
        <laraliveui:menu.item>Baru</laraliveui:menu.item>
        <laraliveui:menu.item>Buka</laraliveui:menu.item>
        <laraliveui:menu.separator />
        <laraliveui:menu.item>Simpan</laraliveui:menu.item>
    </laraliveui:menu.submenu>
</laraliveui:menu>
```

## Menu Checkbox

```blade
<laraliveui:menu>
    <laraliveui:menu.checkbox name="opsi1" checked>Opsi 1</laraliveui:menu.checkbox>
    <laraliveui:menu.checkbox name="opsi2">Opsi 2</laraliveui:menu.checkbox>
</laraliveui:menu>
```

### Menu Checkbox Group

```blade
<laraliveui:menu.checkbox.group>
    <laraliveui:menu.checkbox name="a" checked>Item A</laraliveui:menu.checkbox>
    <laraliveui:menu.checkbox name="b">Item B</laraliveui:menu.checkbox>
</laraliveui:menu.checkbox.group>
```

## Menu Radio

```blade
<laraliveui:menu>
    <laraliveui:menu.radio name="sort" value="asc" checked>Ascending</laraliveui:menu.radio>
    <laraliveui:menu.radio name="sort" value="desc">Descending</laraliveui:menu.radio>
</laraliveui:menu>
```

## Referensi

### `laraliveui:menu.item`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Gaya: `default`, `danger` | `default` |
| `icon` | Nama ikon | — |
| `icon:variant` | Varian ikon | `mini` |
| `icon:trailing` | Ikon di akhir | — |
| `kbd` | Shortcut keyboard | — |
| `suffix` | Konten tambahan di akhir | — |
| `value` | Value untuk select | — |

### `laraliveui:menu.group`

| Prop | Deskripsi |
|------|-----------|
| `heading` | Judul group |

### `laraliveui:menu.submenu`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `heading` | Judul submenu | `''` |
| `icon` | Ikon heading | — |
| `keepOpen` | Jangan tutup setelah klik | `false` |
