---
sidebar_position: 24
---

# Pagination

Komponen pagination untuk navigasi halaman.

```blade
{{ $users->links('laraliveui::pagination', ['paginator' => $users]) }}
```

Atau gunakan komponen langsung:

```blade
<laraliveui:pagination :paginator="$users" />
```

## Scroll To

```blade
<laraliveui:pagination :paginator="$users" scroll-to="#results" />
```

## Referensi

### `laraliveui:pagination`

| Prop | Deskripsi |
|------|-----------|
| `paginator` | Instance paginator Laravel |
| `scroll-to` | Selector untuk scroll setelah navigasi |
