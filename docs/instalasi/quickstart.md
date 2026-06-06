---
sidebar_position: 3
---

# Panduan Cepat

Mulai menggunakan LaraLiveUI dalam 5 menit.

## Library

Untuk proyek Laravel yang sudah ada:

```bash
composer require elnasnato/laraliveui
```

Tambahkan di layout:

```blade
<head>@laraliveuiAppearance</head>
<body>
    @livewireScripts
    @laraliveuiScripts
</body>
```

Import CSS:

```css
@import 'tailwindcss';
@import '../../vendor/elnasnato/laraliveui/dist/laraliveui.css';
```

Gunakan komponen:

```blade
<laraliveui:button variant="primary">Klik Saya</laraliveui:button>
<laraliveui:input name="email" placeholder="Email" />
<laraliveui:icon name="heart" />
```

## Starter Kit

Untuk proyek baru:

```bash
composer create-project elnasnato/laraliveui-starter-kit my-project
cd my-project
php artisan install:features
npm install && npm run build
php artisan serve
```

Buka `http://localhost:8000` dan mulai!
