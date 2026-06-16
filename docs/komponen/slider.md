---
sidebar_position: 30
---

# Slider

Slider range untuk memilih nilai dalam rentang.

```blade
<laraliveui:slider name="range" min="0" max="100" step="1" />
<laraliveui:slider name="harga" min="0" max="10000000" step="100000" />
```

## Show Value

```blade
<laraliveui:slider name="range" min="0" max="100" show-value />
```

## Referensi

### `laraliveui:slider`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field (dari wire:model) | — |
| `min` | Nilai minimum | `0` |
| `max` | Nilai maksimum | `100` |
| `step` | Langkah kenaikan | `1` |
| `value` | Nilai default | `null` |
| `show-value` | Tampilkan nilai saat ini | `false` |
