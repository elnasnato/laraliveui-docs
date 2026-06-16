---
sidebar_position: 36
---

# Pillbox

Komponen untuk menampilkan tag/pill yang dapat dihapus.

```blade
<laraliveui:pillbox name="tags" wire:model="tags" />
```

## Placeholder

```blade
<laraliveui:pillbox name="tags" placeholder="Tambah tag..." />
```

## Maximum Tags

```blade
<laraliveui:pillbox name="tags" :max="5" />
```

## Referensi

### `laraliveui:pillbox`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field (dari wire:model) | — |
| `placeholder` | Teks placeholder | `Type and press enter...` |
| `max` | Maximum jumlah tag | `null` |
