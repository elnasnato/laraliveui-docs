---
sidebar_position: 18
---

# Accordion

Komponen accordion untuk konten yang dapat dilipat.

```blade
<laraliveui:accordion>
    <laraliveui:accordion.item>
        <laraliveui:accordion.trigger>
            <laraliveui:heading>Bagian 1</laraliveui:heading>
        </laraliveui:accordion.trigger>
        <laraliveui:accordion.content>
            Konten bagian 1
        </laraliveui:accordion.content>
    </laraliveui:accordion.item>

    <laraliveui:accordion.item>
        <laraliveui:accordion.trigger>
            <laraliveui:heading>Bagian 2</laraliveui:heading>
        </laraliveui:accordion.trigger>
        <laraliveui:accordion.content>
            Konten bagian 2
        </laraliveui:accordion.content>
    </laraliveui:accordion.item>
</laraliveui:accordion>
```

## Referensi

### `laraliveui:accordion`

Container accordion.

### `laraliveui:accordion.item`

Item accordion individual.

### `laraliveui:accordion.trigger`

Trigger untuk membuka/tutup item.

### `laraliveui:accordion.content`

Konten yang akan ditampilkan saat item terbuka.
