---
sidebar_position: 19
---

# Avatar

Komponen avatar untuk foto profil atau inisial.

```blade
<laraliveui:avatar src="/img/photo.jpg" alt="Foto Profil" />
<laraliveui:avatar initials="JD" />
```

## Ukuran

```blade
<laraliveui:avatar src="/img/photo.jpg" size="sm" />
<laraliveui:avatar src="/img/photo.jpg" size="base" />
<laraliveui:avatar src="/img/photo.jpg" size="lg" />
```

## Avatar Group

```blade
<laraliveui:avatar.group>
    <laraliveui:avatar initials="JD" />
    <laraliveui:avatar initials="AK" />
    <laraliveui:avatar initials="MR" />
    <laraliveui:avatar initials="+3" />
</laraliveui:avatar.group>
```

## Referensi

### `laraliveui:avatar`

| Prop | Deskripsi |
|------|-----------|
| `src` | URL gambar |
| `alt` | Teks alternatif |
| `initials` | Inisial (jika tanpa gambar) |
| `size` | Ukuran: `sm`, `base`, `lg` |

### `laraliveui:avatar.group`

Group avatar yang tumpang tindih.
