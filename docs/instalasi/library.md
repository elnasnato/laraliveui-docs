---
sidebar_position: 1
---

# Instalasi Library

Memasang LaraLiveUI ke proyek Laravel yang sudah ada.

## 1. Install via Composer

```bash
composer require laralive/laraliveui
```

## 2. Tambahkan Blade Directives

Di layout utama Blade, tambahkan directive berikut:

```blade
<head>
    ...
    @laraliveuiAppearance
</head>

<body>
    ...
    @livewireScripts
    @laraliveuiScripts
</body>
```

`@laraliveuiAppearance` menangani deteksi tema (terang/gelap).
`@laraliveuiScripts` memuat JavaScript LaraLiveUI.

## 3. Import CSS

Di `resources/css/app.css`:

```css
@import 'tailwindcss';
@import '../../vendor/laralive/laraliveui/dist/laraliveui.css';

@custom-variant dark (&:where(.dark, .dark *));
```

Pastikan Tailwind CSS v4 sudah terkonfigurasi dengan Vite atau alat build lainnya.

## 4. Build Assets

```bash
npm install
npm run build
```

## 5. Selesai

Komponen LaraLiveUI siap digunakan! Mulai dengan:

```blade
<laraliveui:button variant="primary">Halo Dunia</laraliveui:button>
```
