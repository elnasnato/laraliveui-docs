---
sidebar_position: 4
---

# Dropdown

Menu dropdown yang dapat dikomposisi.

```blade
<laraliveui:dropdown>
    <laraliveui:dropdown.trigger>
        <laraliveui:button variant="outline">Menu</laraliveui:button>
    </laraliveui:dropdown.trigger>

    <laraliveui:menu>
        <laraliveui:menu.item icon="user">Profile</laraliveui:menu.item>
        <laraliveui:menu.item icon="cog-6-tooth">Settings</laraliveui:menu.item>
        <laraliveui:menu.separator />
        <laraliveui:menu.item icon="arrow-left-start-on-rectangle" variant="danger">Logout</laraliveui:menu.item>
    </laraliveui:menu>
</laraliveui:dropdown>
```

## Posisi

```blade
<laraliveui:dropdown position="bottom">
    <laraliveui:dropdown.trigger>
        <laraliveui:button>Bawah</laraliveui:button>
    </laraliveui:dropdown.trigger>
    <laraliveui:menu>...</laraliveui:menu>
</laraliveui:dropdown>

<laraliveui:dropdown position="top">
    <laraliveui:dropdown.trigger>
        <laraliveui:button>Atas</laraliveui:button>
    </laraliveui:dropdown.trigger>
    <laraliveui:menu>...</laraliveui:menu>
</laraliveui:dropdown>
```

## Alignment

```blade
<laraliveui:dropdown align="start">...</laraliveui:dropdown>
<laraliveui:dropdown align="end">...</laraliveui:dropdown>
```

## Dropdown dengan Menu Item Ikon

```blade
<laraliveui:dropdown>
    <laraliveui:dropdown.trigger>
        <laraliveui:button icon="ellipsis-horizontal" variant="ghost" />
    </laraliveui:dropdown.trigger>

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
