---
sidebar_position: 14
---

# Textarea

Komponen textarea untuk input teks multi-baris.

```blade
<laraliveui:textarea name="bio" placeholder="Tulis bio..." />
```

## Baris

```blade
<laraliveui:textarea name="alamat" rows="3" />
<laraliveui:textarea name="deskripsi" rows="6" />
<laraliveui:textarea name="catatan" rows="auto" />
```

## Resize

```blade
<laraliveui:textarea name="bio" resize="vertical" />
<laraliveui:textarea name="bio" resize="none" />
<laraliveui:textarea name="bio" resize="both" />
<laraliveui:textarea name="bio" resize="horizontal" />
```

## Dengan Label & Error

```blade
<laraliveui:textarea name="alamat" label="Alamat" error="Alamat harus diisi" />
```

## Referensi

### `laraliveui:textarea`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Nama field | `wire:model` pertama |
| `rows` | Jumlah baris | `4` |
| `resize` | Arah resize: `vertical`, `none`, `both`, `horizontal` | `vertical` |
| `invalid` | Tandai sebagai invalid | — |
| `label` | Label (via with-field) | — |
| `error` | Pesan error (via with-field) | — |
