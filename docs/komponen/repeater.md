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
<laraliveui:repeater name="items" :min-items="1" :max-items="5">
    <laraliveui:input name="item" />
</laraliveui:repeater>
```

## Add Label Kustom

```blade
<laraliveui:repeater
    name="items"
    add-label="Tambah item"
>
    <laraliveui:input name="value" />
</laraliveui:repeater>
```

## Referensi

### `laraliveui:repeater`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field (dari wire:model) | — |
| `min-items` | Minimum item | `0` |
| `max-items` | Maximum item | `0` |
| `add-label` | Label tombol tambah | `null` |
