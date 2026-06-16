---
sidebar_position: 52
---

# Tags Input

Komponen input untuk menambahkan tag dengan enter.

```blade
<laraliveui:tags-input name="tags" wire:model="tags" />
```

## Placeholder

```blade
<laraliveui:tags-input name="tags" placeholder="Ketik dan tekan enter..." />
```

## Maximum Tags

```blade
<laraliveui:tags-input name="tags" :max="5" />
```

## Duplicates

```blade
<laraliveui:tags-input name="tags" allow-duplicates />
```

## Referensi

### `laraliveui:tags-input`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field (dari wire:model) | — |
| `placeholder` | Teks placeholder | `Type and press enter...` |
| `max` | Maximum jumlah tag | `null` |
| `allow-duplicates` | Izinkan tag duplikat | `false` |
