---
sidebar_position: 2
---

# Basic Input

Komponen input dasar untuk form.

## Button

```blade
<laraliveui:button variant="primary">Simpan</laraliveui:button>
<laraliveui:button variant="secondary">Batal</laraliveui:button>
<laraliveui:button variant="danger">Hapus</laraliveui:button>
<laraliveui:button variant="ghost">Lihat Detail</laraliveui:button>
<laraliveui:button variant="outline">Import</laraliveui:button>

<laraliveui:button size="sm" icon="plus">Tambah</laraliveui:button>
<laraliveui:button size="lg">Kirim</laraliveui:button>

<laraliveui:button disabled>Nonaktif</laraliveui:button>
<laraliveui:button loading>Memproses...</laraliveui:button>
```

## Input

```blade
<laraliveui:input name="email" placeholder="Email" />
<laraliveui:input name="nama" value="John" />
<laraliveui:input type="password" name="password" />
<laraliveui:input error="Email harus diisi" />
```

## Input Group

```blade
<laraliveui:input.group>
    <laraliveui:input.group.prefix>
        <laraliveui:icon name="magnifying-glass" />
    </laraliveui:input.group.prefix>
    <laraliveui:input name="search" placeholder="Cari..." />
</laraliveui:input.group>
```

## Textarea

```blade
<laraliveui:textarea name="bio" placeholder="Tulis bio..." rows="4" />
```

## Select

```blade
<laraliveui:select name="role">
    <option value="admin">Admin</option>
    <option value="user">User</option>
</laraliveui:select>
```

## Checkbox

```blade
<laraliveui:checkbox name="setuju" label="Saya setuju dengan syarat & ketentuan" />
<laraliveui:checkbox name="newsletter" label="Langganan newsletter" checked />
```

## Radio

```blade
<laraliveui:radio name="gender" value="male" label="Laki-laki" />
<laraliveui:radio name="gender" value="female" label="Perempuan" />
```

## Switch

```blade
<laraliveui:switch name="notif" label="Aktifkan notifikasi" />
```

## File Upload

```blade
<laraliveui:file-upload name="foto" accept="image/*" />
```

## Color Picker

```blade
<laraliveui:color-picker name="warna" />
```

## OTP Input

```blade
<laraliveui:otp-input name="kode" digits="6" />
```

## Slider

```blade
<laraliveui:slider name="range" min="0" max="100" step="1" />
```

## Field (Wrapper)

```blade
<laraliveui:field name="email" label="Email" hint="Kami tidak akan membagikan email Anda" error="Email tidak valid">
    <laraliveui:input name="email" placeholder="your@email.com" />
</laraliveui:field>
```
