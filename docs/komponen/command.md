---
sidebar_position: 40
---

# Command

Command palette untuk navigasi dan pencarian cepat.

```blade
<laraliveui:command>
    <x-slot:results>
        <laraliveui:menu>
            <laraliveui:menu.item icon="home">Dashboard</laraliveui:menu.item>
        </laraliveui:menu>
    </x-slot:results>
</laraliveui:command>
```

## Placeholder

```blade
<laraliveui:command placeholder="Cari perintah...">
    <x-slot:results>...</x-slot:results>
</laraliveui:command>
```

## Referensi

### `laraliveui:command`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `placeholder` | Placeholder input pencarian | `Search...` |
| `open` | State terbuka | `false` |

| Slot | Deskripsi |
|------|-----------|
| default | Konten sebelum input |
| `results` | Hasil pencarian |
