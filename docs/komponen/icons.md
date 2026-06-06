---
sidebar_position: 7
---

# Ikon

LaraLiveUI menyertakan 300+ ikon SVG berbasis Heroicons.

## Penggunaan Dasar

```blade
<laraliveui:icon name="magnifying-glass" />
<laraliveui:icon name="heart" />
<laraliveui:icon name="user-circle" />
```

## Varian

```blade
<laraliveui:icon name="check-circle" variant="solid" />
<laraliveui:icon name="check-circle" variant="outline" />
<laraliveui:icon name="check-circle" variant="mini" />
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
```

## Generate Icon Component

```bash
php artisan laraliveui:icon user
```

Membuat komponen Blade yang dapat digunakan ulang dari ikon yang dipilih.
