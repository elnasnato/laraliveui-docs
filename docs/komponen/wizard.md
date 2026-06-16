---
sidebar_position: 54
---

# Wizard

Komponen multi-step wizard dengan navigasi dan progress bar.

```blade
<laraliveui:wizard>
    <laraliveui:wizard.step name="Informasi">
        <laraliveui:input name="nama" label="Nama" />
    </laraliveui:wizard.step>
    <laraliveui:wizard.step name="Detail">
        <laraliveui:input name="email" label="Email" />
    </laraliveui:wizard.step>
    <laraliveui:wizard.step name="Konfirmasi">
        <p>Review data Anda sebelum submit.</p>
    </laraliveui:wizard.step>
</laraliveui:wizard>
```

## Labels Kustom

```blade
<laraliveui:wizard
    finish-label="Selesai"
    next-label="Lanjut"
    previous-label="Kembali"
>
    <laraliveui:wizard.step name="Langkah 1">...</laraliveui:wizard.step>
    <laraliveui:wizard.step name="Langkah 2">...</laraliveui:wizard.step>
</laraliveui:wizard>
```

## Hidden Steps Indicator

```blade
<laraliveui:wizard :show-steps="false">
    <laraliveui:wizard.step name="Step 1">...</laraliveui:wizard.step>
</laraliveui:wizard>
```

## Initial Step

```blade
<laraliveui:wizard :current-step="1">
    <laraliveui:wizard.step name="Step 1">...</laraliveui:wizard.step>
    <laraliveui:wizard.step name="Step 2">...</laraliveui:wizard.step>
</laraliveui:wizard>
```

## Referensi

### `laraliveui:wizard`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `current-step` | Langkah awal | `0` |
| `finish-label` | Label tombol selesai | `Finish` |
| `next-label` | Label tombol next | `Next` |
| `previous-label` | Label tombol previous | `Previous` |
| `show-steps` | Tampilkan indikator langkah | `true` |

### `laraliveui:wizard.step`

| Prop | Deskripsi |
|------|-----------|
| `name` | Nama langkah (ditampilkan di indikator) |
