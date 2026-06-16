---
sidebar_position: 11
---

# Radio

Komponen radio button dengan berbagai variant.

```blade
<laraliveui:radio name="gender" value="male" label="Laki-laki" />
<laraliveui:radio name="gender" value="female" label="Perempuan" />
```

## Variant

Default Buttons Cards Pills Segmented

```blade
<laraliveui:radio name="opsi" value="1" label="Opsi 1" />
<laraliveui:radio name="opsi" value="2" label="Opsi 2" variant="buttons" />
<laraliveui:radio name="opsi" value="3" label="Opsi 3" variant="cards" />
<laraliveui:radio name="opsi" value="4" label="Opsi 4" variant="pills" />
<laraliveui:radio name="opsi" value="5" label="Opsi 5" variant="segmented" />
```

## Radio Group

```blade
<laraliveui:radio.group>
    <laraliveui:radio name="plan" value="monthly" label="Monthly" />
    <laraliveui:radio name="plan" value="yearly" label="Yearly" />
</laraliveui:radio.group>
```

### Group dengan Variant

```blade
<laraliveui:radio.group variant="segmented">
    <laraliveui:radio name="size" value="sm">Small</laraliveui:radio>
    <laraliveui:radio name="size" value="md">Medium</laraliveui:radio>
    <laraliveui:radio name="size" value="lg">Large</laraliveui:radio>
</laraliveui:radio.group>
```

## Indicator

```blade
<laraliveui:radio.indicator />
```

## Referensi

### `laraliveui:radio`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `variant` | Tampilan: `default`, `buttons`, `cards`, `pills`, `segmented` | `default` |
| `name` | Nama field | — |
| `value` | Value radio | — |
| `label` | Teks label | — |
| `description` | Teks deskripsi | — |
| `checked` | Status checked | `false` |

### `laraliveui:radio.group`

| Prop | Deskripsi |
|------|-----------|
| `variant` | Varian untuk semua radio di dalam group |

### `laraliveui:radio.indicator`

Indicator radio. Tidak memiliki props.
