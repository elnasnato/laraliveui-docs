---
sidebar_position: 1
---

# Ikhtisar Starter Kit

**laraliveui-starter-kit** adalah aplikasi Laravel siap pakai yang sudah terintegrasi penuh dengan LaraLiveUI, Laravel Fortify, dan Livewire.

## Fitur Bawaan

- **Autentikasi Lengkap** — Login, Register, Lupa Password, Verifikasi Email
- **Two-Factor Authentication (2FA)** — Keamanan dua langkah
- **Passkeys (WebAuthn)** — Autentikasi tanpa password
- **Manajemen Profile** — Update nama, email, foto profil
- **Pengaturan Tampilan** — Tema terang/gelap, warna aksen
- **Dashboard** — Halaman utama setelah login
- **Dark Mode** — Dukungan penuh tema gelap
- **SQLite** — Database default tanpa konfigurasi

## Teknologi

| Komponen | Teknologi |
|----------|-----------|
| **Framework** | Laravel ^13.0 |
| **UI Library** | LaraLiveUI |
| **Livewire** | Livewire ^4.0 |
| **PHP** | ^8.4 |
| **CSS** | Tailwind CSS v4 |
| **Auth** | Laravel Fortify |
| **Passkeys** | @laravel/passkeys |
| **Database** | SQLite (default) |
| **Build Tool** | Vite |
| **Node.js** | ^24.0 |

## Memulai

```bash
composer create-project elnasnato/laraliveui-starter-kit my-project
cd my-project
php artisan install:features
npm install && npm run build
php artisan serve
```
