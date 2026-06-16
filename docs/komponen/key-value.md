---
sidebar_position: 49
---

# Key-Value

Komponen untuk menampilkan pasangan key-value.

```blade
<laraliveui:key-value :items="[
    'Nama' => 'John Doe',
    'Email' => 'john@example.com',
    'Role' => 'Admin',
]" />
```

## Variant

```blade
<laraliveui:key-value variant="stacked" :items="$data" />
<laraliveui:key-value variant="grid" :items="$data" />
<laraliveui:key-value variant="inline" :items="$data" />
```

## Custom Content

```blade
<laraliveui:key-value>
    <dt>Nama</dt>
    <dd>John Doe</dd>
</laraliveui:key-value>
```

## Referensi

### `laraliveui:key-value`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `items` | Array key-value | — |
| `variant` | Tampilan: `stacked`, `grid`, `inline` | `stacked` |
