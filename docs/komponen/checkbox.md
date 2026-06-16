---
sidebar_position: 10
---

# Checkbox

Komponen checkbox dengan berbagai variant.

```blade
<laraliveui:checkbox name="setuju" label="Saya setuju dengan syarat & ketentuan" />
```

## Variant

Default Buttons Cards Pills

```blade
<laraliveui:checkbox name="opsi1" label="Opsi 1" />
<laraliveui:checkbox name="opsi2" label="Opsi 2" variant="buttons" />
<laraliveui:checkbox name="opsi3" label="Opsi 3" variant="cards" />
<laraliveui:checkbox name="opsi4" label="Opsi 4" variant="pills" />
```

## Checked

```blade
<laraliveui:checkbox name="newsletter" label="Langganan newsletter" checked />
```

## Dengan Deskripsi

```blade
<laraliveui:checkbox
    name="email_notif"
    label="Notifikasi Email"
    description="Terima pemberitahuan via email"
/>
```

## Checkbox Group

```blade
<laraliveui:checkbox.group>
    <laraliveui:checkbox name="a" label="Item A" />
    <laraliveui:checkbox name="b" label="Item B" />
</laraliveui:checkbox.group>
```

### Group dengan Variant

```blade
<laraliveui:checkbox.group variant="buttons">
    <laraliveui:checkbox name="a" label="A" />
</laraliveui:checkbox.group>
```

## Check All

```blade
<laraliveui:checkbox.all>
    <laraliveui:checkbox name="a" label="Item A" />
    <laraliveui:checkbox name="b" label="Item B" />
</laraliveui:checkbox.all>
```

## Indicator

```blade
<laraliveui:checkbox.indicator />
```

Gunakan di dalam checkbox untuk custom styling.

## Referensi

### `laraliveui:checkbox`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Tampilan: `default`, `buttons`, `cards`, `pills` | `default` |
| `name` | Nama field | — |
| `label` | Teks label | — |
| `description` | Teks deskripsi | — |
| `checked` | Status checked | `false` |

### `laraliveui:checkbox.group`

| Prop | Deskripsi |
|------|-----------|
| `variant` | Varian untuk semua checkbox di dalam group |

### `laraliveui:checkbox.all`

Check all untuk group. Tidak memiliki props.

### `laraliveui:checkbox.indicator`

Indicator checkbox. Tidak memiliki props.
