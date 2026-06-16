---
sidebar_position: 19
---

# Avatar

Komponen avatar untuk foto profil atau inisial.

```blade
<laraliveui:avatar src="/img/photo.jpg" alt="Foto Profil" />
<laraliveui:avatar name="John Doe" />
<laraliveui:avatar icon="user" />
```

## Ukuran

```blade
<laraliveui:avatar src="/img/photo.jpg" size="xs" />
<laraliveui:avatar src="/img/photo.jpg" size="sm" />
<laraliveui:avatar src="/img/photo.jpg" size="md" />
<laraliveui:avatar src="/img/photo.jpg" size="lg" />
<laraliveui:avatar src="/img/photo.jpg" size="xl" />
```

## Circle

```blade
<laraliveui:avatar src="/img/photo.jpg" circle />
```

## Warna Otomatis

```blade
<laraliveui:avatar name="John Doe" color="auto" />
```

## Badge

```blade
<laraliveui:avatar src="/img/photo.jpg" badge="3" />
```

## Tooltip

```blade
<laraliveui:avatar src="/img/photo.jpg" name="John Doe" tooltip />
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

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `src` | URL gambar | `null` |
| `alt` | Teks alternatif | `null` |
| `name` | Nama (untuk inisial otomatis) | `null` |
| `initials` | Inisial (jika tanpa gambar) | `null` |
| `icon` | Ikon fallback | `user` |
| `size` | Ukuran: `xs`, `sm`, `md`, `lg`, `xl` | `md` |
| `color` | Warna background atau `auto` | `null` |
| `circle` | Bentuk lingkaran penuh | `null` |
| `badge` | Teks badge | `null` |
| `tooltip` | Tampilkan tooltip dengan nama | `null` |

### `laraliveui:avatar.group`

Group avatar yang tumpang tindih. Tidak memiliki props.
