---
sidebar_position: 29
---

# OTP Input

Input untuk One-Time Password.

```blade
<laraliveui:otp name="kode" length="6" />
<laraliveui:otp name="pin" length="4" />
```

## Private Mode

```blade
<laraliveui:otp name="pin" private length="4" />
```

## OTP Group

```blade
<laraliveui:otp.group length="6">
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

### `laraliveui:otp`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field | — |
| `length` | Jumlah digit | `null` |
| `private` | Mode password (bullets) | `false` |

### `laraliveui:otp.group`

Group input OTP. Tidak memiliki props.

### `laraliveui:otp.input`

Input OTP individual. Tidak memiliki props.

### `laraliveui:otp.separator`

Separator visual antar input. Tidak memiliki props.
