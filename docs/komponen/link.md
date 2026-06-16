---
sidebar_position: 39
---

# Link

Komponen link dengan styling LaraLiveUI.

```blade
<laraliveui:link href="https://example.com">Kunjungi Situs</laraliveui:link>
<laraliveui:link href="/dashboard">Dashboard</laraliveui:link>
```

## Variant

```blade
<laraliveui:link href="#" variant="ghost">Ghost Link</laraliveui:link>
<laraliveui:link href="#" variant="subtle">Subtle Link</laraliveui:link>
```

## External

```blade
<laraliveui:link href="https://example.com" external>External Link</laraliveui:link>
```

## Sebagai Button

```blade
<laraliveui:link as="button" x-on:click="handleClick">Link sebagai button</laraliveui:link>
```

## Referensi

### `laraliveui:link`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `href` | URL tujuan | — |
| `as` | Render sebagai: `null`, `button` | `null` |
| `external` | Buka di tab baru | `null` |
| `accent` | Gunakan warna aksen | `true` |
| `variant` | Varian: `ghost`, `subtle` | `null` |
| `strong` | Teks tebal | `false` |
