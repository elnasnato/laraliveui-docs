---
sidebar_position: 2
---

# Instalasi Starter Kit

Membuat proyek Laravel baru dengan LaraLiveUI terpasang dan siap pakai.

## 1. Buat Proyek Baru

```bash
composer create-project elnasnato/laraliveui-starter-kit my-project
cd my-project
```

Proses ini akan secara otomatis:
- Menginstal semua dependensi Composer
- Menyalin `.env.example` ke `.env`
- Membuat application key
- Membuat database SQLite
- Menjalankan migrasi
- Menambahkan prefix emoji ke file komponen Livewire

## 2. Konfigurasi Fitur Auth

```bash
php artisan install:features
```

Pilih fitur autentikasi yang diinginkan secara interaktif:
- Registration
- Email Verification
- Two-Factor Authentication (2FA)
- Passkeys (WebAuthn)
- Password Confirmation

## 3. Install Frontend

```bash
npm install
npm run build
```

## 4. Jalankan Dev Server

```bash
php artisan serve
```

Atau gunakan perintah `dev` yang sudah dikonfigurasi untuk menjalankan server, queue listener, logs, dan Vite secara bersamaan:

```bash
composer run dev
```

## Struktur Proyek

```
my-project/
  app/
    Actions/Fortify/     # Aksi Fortify (CreateNewUser, dll)
    Livewire/Actions/    # Komponen Livewire (Logout, dll)
    Providers/           # Service providers
  resources/
    views/
      components/        # Komponen Blade
      layouts/           # Layout app & auth
      pages/             # Halaman (dashboard, auth, settings)
  routes/
    web.php              # Route utama
    settings.php         # Route settings
    console.php          # Route console
```
