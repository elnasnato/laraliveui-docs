---
sidebar_position: 42
---

# Calendar & Date Picker

Komponen kalender untuk memilih tanggal.

## Calendar

```blade
<laraliveui:calendar />
<laraliveui:calendar selected="2024-06-15" />
```

## Referensi

### `laraliveui:calendar`

| Prop | Deskripsi |
|------|-----------|
| `month` | Bulan (1-12) |
| `year` | Tahun |
| `selected` | Tanggal yang dipilih |

### `laraliveui:date-picker`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field (dari wire:model) | — |
| `placeholder` | Teks placeholder | `Pick a date` |
| `invalid` | Tampilkan state error | `null` |
| `size` | Ukuran: `base`, `sm`, `xs` | `null` |
