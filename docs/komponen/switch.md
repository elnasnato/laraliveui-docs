---
sidebar_position: 12
---

# Switch

Toggle switch untuk mengaktifkan/menonaktifkan pengaturan.

```blade
<laraliveui:switch name="notifikasi" label="Aktifkan notifikasi" />
```

## Ukuran

```blade
<laraliveui:switch name="opsi" label="Small" size="sm" />
<laraliveui:switch name="opsi" label="Default" size="base" />
<laraliveui:switch name="opsi" label="Large" size="lg" />
```

## Checked

```blade
<laraliveui:switch name="newsletter" label="Langganan newsletter" checked />
```

## Dengan Deskripsi

```blade
<laraliveui:switch
    name="marketing"
    label="Email Marketing"
    description="Terima email tentang produk baru"
/>
```

## On/Off Value

```blade
<laraliveui:switch
    name="status"
    label="Status"
    on-value="active"
    off-value="inactive"
/>
```

## Referensi

### `laraliveui:switch`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field | `wire:model` pertama |
| `label` | Teks label | `null` |
| `description` | Teks deskripsi | `null` |
| `size` | Ukuran: `sm`, `base`, `lg` | `base` |
| `checked` | Status checked | `false` |
| `disabled` | Nonaktifkan switch | `false` |
| `on-value` | Value saat on | `'1'` |
| `off-value` | Value saat off | `'0'` |
