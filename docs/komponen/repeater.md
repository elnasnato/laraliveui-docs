---
sidebar_position: 50
---

# Repeater

Komponen untuk mengulang grup field form secara dinamis.

```blade
<laraliveui:repeater name="items" wire:model="items">
    <laraliveui:input name="nama" placeholder="Nama" />
    <laraliveui:input name="email" placeholder="Email" />
</laraliveui:repeater>
```

## Minimum & Maximum

```blade
<laraliveui:repeater name="items" :min="1" :max="5">
    <laraliveui:input name="item" />
</laraliveui:repeater>
```

## Label Kustom

```blade
<laraliveui:repeater
    name="items"
    add-label="Tambah item"
    remove-label="Hapus"
>
    <laraliveui:input name="value" />
</laraliveui:repeater>
```

## Button Kustom

```blade
<laraliveui:repeater name="items">
    <laraliveui:input name="value" />
    <laraliveui:slot name="create-button">
        <laraliveui:button variant="primary">Tambah Baru</laraliveui:button>
    </laraliveui:slot>
</laraliveui:repeater>
```

## Default Item

```blade
<laraliveui:repeater name="items" default-item='{"name": "", "qty": 1}'>
    <laraliveui:input name="name" />
    <laraliveui:input name="qty" type="number" />
</laraliveui:repeater>
```

## Referensi

### `laraliveui:repeater`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field (dari wire:model) | — |
| `min` | Minimum item | `0` |
| `max` | Maximum item | — |
| `add-label` | Label tombol tambah | `Add item` |
| `remove-label` | Label tombol hapus | `Remove` |
| `default-item` | Default value item baru | `{}` |
| `create-button` | Slot tombol tambah kustom | — |
