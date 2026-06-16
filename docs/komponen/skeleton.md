---
sidebar_position: 25
---

# Skeleton

Placeholder loading untuk konten yang sedang dimuat.

```blade
<laraliveui:skeleton class="h-4 w-full" />
<laraliveui:skeleton class="h-8 w-8 rounded-full" />
```

## Animasi

```blade
<laraliveui:skeleton animate="pulse" class="h-4 w-full" />
<laraliveui:skeleton animate="shimmer" class="h-4 w-full" />
```

## Skeleton Line

```blade
<laraliveui:skeleton.line />
```

## Skeleton Group

```blade
<laraliveui:skeleton.group>
    <laraliveui:skeleton.line />
    <laraliveui:skeleton.line />
    <laraliveui:skeleton.line class="w-3/4" />
</laraliveui:skeleton.group>
```

## Referensi

### `laraliveui:skeleton`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `animate` | Animasi: `pulse`, `shimmer` | `null` |

Gunakan CSS class untuk mengatur ukuran dan bentuk.

### `laraliveui:skeleton.group`

Group skeleton lines. Tidak memiliki props.

### `laraliveui:skeleton.line`

Skeleton line dengan ukuran default. Tidak memiliki props.
