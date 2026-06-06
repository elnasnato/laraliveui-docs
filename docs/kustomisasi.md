---
sidebar_position: 6
---

# Kustomisasi

## Publikasikan Blade Components

Untuk mengkustomisasi tampilan komponen LaraLiveUI, publikasikan file Blade-nya:

```bash
php artisan laraliveui:publish
```

File akan disalin ke `resources/views/vendor/laraliveui/` dan dapat diedit langsung.

## Tema & Warna Aksen

LaraLiveUI menggunakan CSS custom properties untuk theming. Ubah warna aksen melalui CSS:

```css
:root {
  --color-accent: 99 102 241; /* Indigo */
  --color-accent-light: 129 140 248;
  --color-accent-dark: 79 70 229;
}
```

Atau gunakan Tailwind CSS v4:

```css
@theme {
  --color-accent: #6366f1;
  --color-accent-dark: #4f46e5;
}
```

## Dark Mode

Dark mode diaktifkan secara otomatis melalui `@laraliveuiAppearance`. Untuk toggle manual:

```blade
<laraliveui:button onclick="document.documentElement.classList.toggle('dark')">
    Ganti Tema
</laraliveui:button>
```

## Custom CSS

Tambahkan gaya kustom di `resources/css/app.css` setelah import LaraLiveUI:

```css
@import 'tailwindcss';
@import '../../vendor/elnasnato/laraliveui/dist/laraliveui.css';
@custom-variant dark (&:where(.dark, .dark *));

/* Kustomisasi Anda */
.laraliveui-button {
  @apply rounded-xl;
}
```

## JavaScript

LaraLiveUI menggunakan Alpine.js untuk interaktivitas. Anda dapat memperluas fungsionalitas dengan kode JavaScript kustom setelah `@laraliveuiScripts`:

```blade
@laraliveuiScripts
<script>
    document.addEventListener('laraliveui:ready', function() {
        console.log('LaraLiveUI siap!');
    });
</script>
```
