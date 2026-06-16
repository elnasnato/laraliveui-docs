---
sidebar_position: 45
---

# Time Picker

Komponen untuk memilih waktu melalui dropdown.

```blade
<laraliveui:time-picker name="waktu" wire:model="waktu" />
```

## Interval

Atur interval menit dengan prop `interval`.

```blade
<laraliveui:time-picker name="waktu" :interval="15" />
```

## Format

```blade
<laraliveui:time-picker name="waktu" format="24h" />
<laraliveui:time-picker name="waktu" format="12h" />
```

## Ukuran

```blade
<laraliveui:time-picker name="wkt1" size="sm" />
<laraliveui:time-picker name="wkt2" size="xs" />
```

## Referensi

### `laraliveui:time-picker`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field (dari wire:model) | — |
| `placeholder` | Teks placeholder | `Pick a time` |
| `invalid` | Tampilkan state error | `null` |
| `size` | Ukuran: `base`, `sm`, `xs` | — |
| `interval` | Interval menit | `30` |
| `format` | Format waktu: `12h`, `24h` | `12h` |
