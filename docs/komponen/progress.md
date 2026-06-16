---
sidebar_position: 26
---

# Progress

Indikator progress bar.

```blade
<laraliveui:progress />
```

Gunakan CSS variable `--laraliveui-progress-percentage` untuk mengatur nilai progress:

```blade
<div style="--laraliveui-progress-percentage: 75%">
    <laraliveui:progress />
</div>
```

## Warna

```blade
<div style="--laraliveui-progress-percentage: 60%">
    <laraliveui:progress color="red" />
    <laraliveui:progress color="blue" />
    <laraliveui:progress color="green" />
</div>
```

## Referensi

### `laraliveui:progress`

| Prop | Deskripsi |
|------|-----------|
| `color` | Warna progress: `red`, `green`, `blue`, `amber`, dll |

Gunakan CSS variable `--laraliveui-progress-percentage` pada parent untuk mengatur nilai.
