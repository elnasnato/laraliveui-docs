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

## Ukuran

```blade
<laraliveui:tags-input name="tags" size="sm" />
<laraliveui:tags-input name="tags" size="xs" />
```

## Referensi

### `laraliveui:tags-input`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field (dari wire:model) | — |
| `placeholder` | Teks placeholder | `Type and press enter...` |
| `max` | Maximum jumlah tag | — |
| `allow-duplicates` | Izinkan tag duplikat | `false` |
| `invalid` | Tampilkan state error | `null` |
| `variant` | Variant: `outline` | `outline` |
| `size` | Ukuran: `base`, `sm`, `xs` | — |
