---
sidebar_position: 51
---

# Rover

Komponen untuk navigasi keyboard dalam daftar item. Membungkus elemen dengan kemampuan navigasi arrow key.

```blade
<laraliveui:rover>
    <laraliveui:rover.item>Item 1</laraliveui:rover.item>
    <laraliveui:rover.item>Item 2</laraliveui:rover.item>
    <laraliveui:rover.item>Item 3</laraliveui:rover.item>
</laraliveui:rover>
```

## Orientasi

```blade
<laraliveui:rover orientation="vertical">
    <laraliveui:rover.item>Atas</laraliveui:rover.item>
    <laraliveui:rover.item>Bawah</laraliveui:rover.item>
</laraliveui:rover>

<laraliveui:rover orientation="horizontal">
    <laraliveui:rover.item>Kiri</laraliveui:rover.item>
    <laraliveui:rover.item>Kanan</laraliveui:rover.item>
</laraliveui:rover>

<laraliveui:rover orientation="both">
    <laraliveui:rover.item>Grid 1</laraliveui:rover.item>
    <laraliveui:rover.item>Grid 2</laraliveui:rover.item>
</laraliveui:rover>
```

## Non-Loop

```blade
<laraliveui:rover :loop="false">
    <laraliveui:rover.item>Item 1</laraliveui:rover.item>
    <laraliveui:rover.item>Item 2</laraliveui:rover.item>
    <laraliveui:rover.item>Item 3</laraliveui:rover.item>
</laraliveui:rover>
```

## Disabled Item

```blade
<laraliveui:rover>
    <laraliveui:rover.item>Item 1</laraliveui:rover.item>
    <laraliveui:rover.item disabled>Item 2 (disabled)</laraliveui:rover.item>
    <laraliveui:rover.item>Item 3</laraliveui:rover.item>
</laraliveui:rover>
```

## Referensi

### `laraliveui:rover`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `orientation` | Orientasi navigasi: `vertical`, `horizontal`, `both` | `vertical` |
| `loop` | Loop navigasi | `true` |

### `laraliveui:rover.item`

| Prop | Deskripsi |
|------|-----------|
| `disabled` | Nonaktifkan item |
| `index` | Index item (opsional) |
