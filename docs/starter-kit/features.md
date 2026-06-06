---
sidebar_position: 2
---

# Fitur Autentikasi

Starter kit menggunakan **Chisel** untuk konfigurasi fitur autentikasi secara interaktif.

## Install Features

```bash
php artisan install:features
```

Perintah ini akan menanyakan fitur apa saja yang ingin diaktifkan:

### Registration
Mengaktifkan halaman pendaftaran pengguna baru. Jika dinonaktifkan, hanya admin yang dapat membuat akun.

### Email Verification
Mengirim email verifikasi setelah registrasi. Memerlukan konfigurasi mail di `.env`.

### Two-Factor Authentication (2FA)
Menambahkan lapisan keamanan kedua menggunakan kode dari aplikasi autentikator (Google Authenticator, dll).

### Passkeys (WebAuthn)
Autentikasi menggunakan biometrik (sidik jari, Face ID) atau PIN perangkat. Didukung oleh `@laravel/passkeys`.

### Password Confirmation
Meminta konfirmasi password sebelum mengakses area sensitif (seperti pengaturan keamanan).

## Konfigurasi Manual

Chisel menggunakan marker di file Blade untuk menandai blok kode yang akan dihapus jika fitur tidak dipilih:

```blade
{{-- @chisel-registration --}}
<a href="{{ route('register') }}">Daftar</a>
{{-- @end-chisel-registration --}}
```

Anda juga dapat mengedit `config/fortify.php` untuk mengatur fitur secara manual.
