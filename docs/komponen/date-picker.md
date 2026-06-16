---
sidebar_position: 44
---

# Date Picker

Komponen untuk memilih tanggal melalui kalender dropdown.

```blade
<laraliveui:date-picker name="tanggal" wire:model="tanggal" />
```

## Placeholder

```blade
<laraliveui:date-picker name="tanggal" placeholder="Pilih tanggal" />
```

## Ukuran

```blade
<laraliveui:date-picker name="tgl1" size="sm" />
<laraliveui:date-picker name="tgl2" size="xs" />
```

## Referensi

### `laraliveui:date-picker`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field (dari wire:model) | — |
| `placeholder` | Teks placeholder | `Pick a date` |
| `invalid` | Tampilkan state error | `null` |
| `size` | Ukuran: `base`, `sm`, `xs` | `null` |
