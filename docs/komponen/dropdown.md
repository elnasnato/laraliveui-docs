---
sidebar_position: 4
---

# Dropdown

Menu dropdown yang dapat dikomposisi. Gunakan bersama komponen `laraliveui:menu` untuk daftar item.

```blade
<laraliveui:dropdown>
    <laraliveui:button variant="outline">Menu</laraliveui:button>

    <laraliveui:menu>
        <laraliveui:menu.item icon="user">Profile</laraliveui:menu.item>
        <laraliveui:menu.item icon="cog-6-tooth">Settings</laraliveui:menu.item>
        <laraliveui:menu.separator />
        <laraliveui:menu.item icon="arrow-left-start-on-rectangle" variant="danger">Logout</laraliveui:menu.item>
    </laraliveui:menu>
</laraliveui:dropdown>
```

## Posisi & Alignment

Gunakan prop `position` dan `align` untuk mengontrol arah dropdown.

```blade
<laraliveui:dropdown position="bottom" align="start">
    ...
</laraliveui:dropdown>

<laraliveui:dropdown position="top" align="end">
    ...
</laraliveui:dropdown>
```

## Dengan Icon Trigger

```blade
<laraliveui:dropdown>
    <laraliveui:button icon="ellipsis-horizontal" variant="ghost" />

    <laraliveui:menu>
        <laraliveui:menu.item icon="pencil-square">Edit</laraliveui:menu.item>
        <laraliveui:menu.item icon="trash" variant="danger">Hapus</laraliveui:menu.item>
    </laraliveui:menu>
</laraliveui:dropdown>
```

## Referensi

### `laraliveui:dropdown`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `position` | Posisi dropdown: `top`, `bottom` | `bottom` |
| `align` | Alignment: `start`, `end` | `start` |

| Slot | Deskripsi |
|------|-----------|
| default | Elemen trigger dan `laraliveui:menu` |
