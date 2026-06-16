---
sidebar_position: 33
---

# Field

Wrapper untuk input dengan label, deskripsi, dan error.

```blade
<laraliveui:field name="email" label="Email">
    <laraliveui:input name="email" placeholder="your@email.com" />
</laraliveui:field>
```

## Inline

```blade
<laraliveui:field variant="inline" name="notif" label="Notifikasi">
    <laraliveui:switch name="notif" />
</laraliveui:field>
```

## Referensi

### `laraliveui:field`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Varian: `block`, `bare`, `inline` | `block` |

| Slot | Deskripsi |
|------|-----------|
| default | Konten field (label, input, error, dll) |
