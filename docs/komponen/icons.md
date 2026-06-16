---
sidebar_position: 34
---

# Ikon

LaraLiveUI menyertakan 300+ ikon SVG berbasis Heroicons.

## Penggunaan Dasar

```blade
<laraliveui:icon name="magnifying-glass" />
<laraliveui:icon name="heart" />
<laraliveui:icon name="check-circle" />
```

## Ukuran & Kelas

```blade
<laraliveui:icon name="x-mark" class="w-5 h-5" />
<laraliveui:icon name="plus" class="w-4 h-4 text-green-500" />
```

## Di Dalam Button

```blade
<laraliveui:button variant="primary" icon="plus">Tambah Baru</laraliveui:button>
<laraliveui:button icon="ellipsis-horizontal" variant="ghost" />
```

## Referensi

### `laraliveui:icon`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama ikon | — |
