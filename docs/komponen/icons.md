---
sidebar_position: 34
---

# Ikon

LaraLiveUI menyertakan 300+ ikon SVG berbasis Heroicons.

## Penggunaan Dasar

```blade
<laraliveui:icon name="magnifying-glass" />
<laraliveui:icon name="heart" />
<laraliveui:icon name="user-circle" />
<laraliveui:icon name="check-circle" />
<laraliveui:icon name="x-mark" />
<laraliveui:icon name="cog-6-tooth" />
<laraliveui:icon name="arrow-down-tray" />
<laraliveui:icon name="plus" />
```

## Varian

```blade
<laraliveui:icon name="check-circle" variant="outline" />
<laraliveui:icon name="check-circle" variant="solid" />
<laraliveui:icon name="check-circle" variant="mini" />
<laraliveui:icon name="check-circle" variant="micro" />
```

## Ukuran & Kelas

```blade
<laraliveui:icon name="x-mark" class="w-5 h-5" />
<laraliveui:icon name="plus" class="w-4 h-4 text-green-500" />
<laraliveui:icon name="trash" class="w-6 h-6 text-red-500" />
```

## Di Dalam Button

```blade
<laraliveui:button variant="primary" icon="plus">Tambah Baru</laraliveui:button>
<laraliveui:button variant="danger" icon="trash">Hapus</laraliveui:button>
<laraliveui:button icon="ellipsis-horizontal" variant="ghost" />
<laraliveui:button icon="arrow-down-tray" icon:trailing="chevron-down">Export</laraliveui:button>
```

## Generate Icon Component

```bash
php artisan laraliveui:icon user
```

Membuat komponen Blade yang dapat digunakan ulang dari ikon yang dipilih.

## Daftar Ikon Tersedia

LaraLiveUI mencakup semua ikon dari Heroicons:
- `magnifying-glass`, `heart`, `user`, `user-circle`, `user-group`, `cog`, `cog-6-tooth`, `cog-8-tooth`
- `check`, `check-circle`, `check-badge`, `x-mark`, `x-circle`, `minus`, `minus-circle`, `plus`, `plus-circle`
- `arrow-down`, `arrow-up`, `arrow-left`, `arrow-right`, `arrow-down-tray`, `arrow-up-tray`
- `chevron-down`, `chevron-up`, `chevron-left`, `chevron-right`, `chevron-double-down`, `chevron-double-up`
- `home`, `folder`, `document`, `document-text`, `trash`, `pencil`, `pencil-square`
- `envelope`, `bell`, `bell-alert`, `bell-slash`, `bell-snooze`, `calendar`, `clock`
- `eye`, `eye-slash`, `lock-closed`, `lock-open`, `shield-check`, `shield-exclamation`
- `information-circle`, `exclamation-circle`, `exclamation-triangle`, `question-mark-circle`
- `photo`, `film`, `camera`, `video-camera`, `music-note`, `gift`, `fire`, `star`
- `moon`, `sun`, `sparkles`, `bolt`, `cloud`, `rainbow`, `swatch`
- Dan 300+ ikon lainnya...

## Referensi

### `laraliveui:icon`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama ikon | — |
| `variant` | Varian: `outline`, `solid`, `mini`, `micro` | `mini` |
| `class` | CSS class | — |
