---
sidebar_position: 46
---

# Chart & Carousel

Komponen chart dan carousel.

## Chart

```blade
<laraliveui:chart :data="$chartData" />
<laraliveui:chart type="bar" :data="$data" :height="400" />
```

### Referensi

#### `laraliveui:chart`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `type` | Tipe chart: `bar`, `line` | `bar` |
| `labels` | Array label | `[]` |
| `datasets` | Array dataset | `[]` |
| `height` | Tinggi chart (px) | `300` |

## Carousel

```blade
<laraliveui:carousel>
    <laraliveui:carousel.slide>Slide 1</laraliveui:carousel.slide>
    <laraliveui:carousel.slide>Slide 2</laraliveui:carousel.slide>
</laraliveui:carousel>
```

### Autoplay

```blade
<laraliveui:carousel autoplay :interval="5000">
    <laraliveui:carousel.slide>Slide 1</laraliveui:carousel.slide>
</laraliveui:carousel>
```

### Referensi

#### `laraliveui:carousel`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `autoplay` | Putar otomatis | `false` |
| `interval` | Interval autoplay (ms) | `3000` |

#### `laraliveui:carousel.slide`

Slide carousel. Tidak memiliki props.
