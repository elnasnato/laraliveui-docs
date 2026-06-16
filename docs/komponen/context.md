---
sidebar_position: 41
---

# Context Menu

Menu konteks yang muncul saat klik kanan.

```blade
<laraliveui:context>
    <laraliveui:menu>
        <laraliveui:menu.item icon="pencil-square">Edit</laraliveui:menu.item>
        <laraliveui:menu.item icon="trash" variant="danger">Hapus</laraliveui:menu.item>
    </laraliveui:menu>
</laraliveui:context>
```

## Referensi

### `laraliveui:context`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `placement` | Posisi menu: `bottom-start`, `bottom-end`, `top-start`, `top-end` | `bottom-start` |
