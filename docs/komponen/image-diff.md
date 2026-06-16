---
sidebar_position: 47
---

# Image Diff

Komponen perbandingan gambar before/after dengan slider interaktif.

```blade
<laraliveui:image-diff
    before="/images/sebelum.jpg"
    after="/images/sesudah.jpg"
/>
```

## Dengan Label

```blade
<laraliveui:image-diff
    before="/images/original.jpg"
    after="/images/edited.jpg"
    before-label="Asli"
    after-label="Edit"
/>
```

## Posisi Awal

Atur posisi awal slider (dalam persen).

```blade
<laraliveui:image-diff
    before="/images/kiri.jpg"
    after="/images/kanan.jpg"
    :start-position="75"
/>
```

## Referensi

### `laraliveui:image-diff`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `before` | URL gambar sebelum | — |
| `after` | URL gambar sesudah | — |
| `before-label` | Label gambar sebelum | — |
| `after-label` | Label gambar sesudah | — |
| `start-position` | Posisi awal slider (%) | `50` |
