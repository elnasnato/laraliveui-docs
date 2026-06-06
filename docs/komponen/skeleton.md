---
sidebar_position: 25
---

# Skeleton

Placeholder loading untuk konten yang sedang dimuat.

```blade
<laraliveui:skeleton class="h-4 w-full" />
<laraliveui:skeleton class="h-8 w-8 rounded-full" />
<laraliveui:skeleton class="h-32 w-full rounded-lg" />
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

Gunakan CSS class untuk mengatur ukuran dan bentuk.

### `laraliveui:skeleton.group`

Group skeleton lines.

### `laraliveui:skeleton.line`

Skeleton line dengan ukuran default.
