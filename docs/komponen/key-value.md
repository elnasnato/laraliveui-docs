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
    <div>
        <dt class="text-sm font-medium text-zinc-500">Nama</dt>
        <dd class="text-sm text-zinc-800 dark:text-white">John Doe</dd>
    </div>
    <div>
        <dt class="text-sm font-medium text-zinc-500">Email</dt>
        <dd class="text-sm text-zinc-800 dark:text-white">john@example.com</dd>
    </div>
</laraliveui:key-value>
```

## Referensi

### `laraliveui:key-value`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `items` | Array key-value | — |
| `variant` | Tampilan: `stacked`, `grid`, `inline` | `stacked` |
