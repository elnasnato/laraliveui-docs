---
sidebar_position: 33
---

# Field

Wrapper untuk input dengan label, deskripsi, dan error.

```blade
<laraliveui:field name="email" label="Email" hint="Kami tidak akan membagikan email Anda" error="Email tidak valid">
    <laraliveui:input name="email" placeholder="your@email.com" />
</laraliveui:field>
```

## Props pada Field

Semua form input (input, select, textarea, dll) mendukung props field secara langsung:

```blade
<laraliveui:input
    name="email"
    label="Email"
    placeholder="your@email.com"
    description="Kami tidak akan membagikan email Anda"
    error="Email tidak valid"
    badge="Wajib"
/>
```

### Props Field

| Prop | Deskripsi |
|------|-----------|
| `label` | Label field |
| `description` | Teks deskripsi |
| `description:trailing` | Deskripsi trailing |
| `error` | Pesan error |
| `error:name` | Nama untuk error lookup |
| `error:bag` | Error bag |
| `badge` | Badge pada label |
| `label:badge` | Badge label |
| `label:aside` | Konten aside pada label |
| `label:trailing` | Konten trailing pada label |
