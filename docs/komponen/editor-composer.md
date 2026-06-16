---
sidebar_position: 44
---

# Editor & Composer

Komponen rich text editor dan composer.

## Editor

```blade
<laraliveui:editor name="konten" />
<laraliveui:editor name="artikel" placeholder="Tulis artikel..." />
```

## Composer

Composer untuk menulis konten dengan formatting:

```blade
<laraliveui:composer name="pesan" placeholder="Tulis pesan..." />
```

## Referensi

### `laraliveui:editor`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field | — |
| `value` | Nilai default | `` |
| `placeholder` | Placeholder text | `Write something...` |

### `laraliveui:composer`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field | — |
| `placeholder` | Placeholder text | `Write a message...` |
