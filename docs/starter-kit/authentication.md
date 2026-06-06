---
sidebar_position: 3
---

# Autentikasi

Halaman autentikasi yang tersedia di starter kit.

## Login

```
/login
```

Halaman login dengan email dan password. Juga mendukung passkeys jika diaktifkan.

## Register

```
/register
```

Pendaftaran pengguna baru. Hanya tersedia jika fitur Registration diaktifkan.

## Lupa Password

```
/forgot-password
/reset-password/{token}
```

Meminta reset password via email.

## Verifikasi Email

```
/email/verify
```

Halaman yang muncul setelah registrasi (jika Email Verification diaktifkan).

## Two-Factor Challenge

```
/two-factor-challenge
```

Halaman untuk memasukkan kode 2FA dari aplikasi autentikator.

## Confirm Password

```
/confirm-password
```

Halaman konfirmasi password sebelum akses area sensitif.

## Passkeys

```
/passkeys/register
/passkeys/authenticate
```

Endpoint untuk registrasi dan autentikasi passkeys (WebAuthn).
