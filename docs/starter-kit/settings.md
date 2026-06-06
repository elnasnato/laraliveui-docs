---
sidebar_position: 4
---

# Pengaturan

Halaman pengaturan profil dan aplikasi.

## Profile

```
/settings/profile
```

- Update nama dan email
- Upload foto profil
- Hapus akun

## Security

```
/settings/security
```

- Update password
- Two-Factor Authentication (2FA)
- Passkeys (WebAuthn)
- Sesi perangkat aktif

## Appearance

```
/settings/appearance
```

- Tema: Terang / Gelap / Sistem
- Warna aksen: Indigo, Emerald, Amber, Rose, Sky, Violet
- Font
- Bahasa (jika ada)

## Route Settings

Semua route settings didefinisikan di `routes/settings.php` menggunakan grup middleware `auth`.
