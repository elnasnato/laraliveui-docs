---
sidebar_position: 31
---

# File Upload

Upload file dengan drag & drop.

```blade
<laraliveui:file-upload name="dokumen" accept="image/*" />
<laraliveui:file-upload name="lampiran" accept=".pdf,.doc" multiple />
```

## Referensi

### `laraliveui:file-upload`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field | — |
| `accept` | Tipe file yang diterima | `null` |
| `multiple` | Izinkan multiple files | `false` |
