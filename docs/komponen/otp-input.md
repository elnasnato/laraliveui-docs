---
sidebar_position: 29
---

# OTP Input

Input untuk One-Time Password.

```blade
<laraliveui:otp-input name="kode" digits="6" />
<laraliveui:otp-input name="pin" digits="4" />
```

## OTP Group

```blade
<laraliveui:otp.group digits="6">
    <laraliveui:otp.input />
    <laraliveui:otp.separator />
    <laraliveui:otp.input />
    <laraliveui:otp.input />
    <laraliveui:otp.input />
    <laraliveui:otp.input />
    <laraliveui:otp.input />
</laraliveui:otp.group>
```

## Referensi

### `laraliveui:otp-input`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field | — |
| `digits` | Jumlah digit | `6` |
