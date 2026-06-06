---
sidebar_position: 5
---

# Feedback

Komponen untuk notifikasi, konfirmasi, dan indikator status.

## Modal

```blade
<laraliveui:modal name="confirm-delete">
    <laraliveui:modal.trigger>
        <laraliveui:button variant="danger">Hapus Data</laraliveui:button>
    </laraliveui:modal.trigger>
    <laraliveui:modal.dialog>
        <laraliveui:heading level="2">Konfirmasi Hapus</laraliveui:heading>
        <p>Apakah Anda yakin ingin menghapus data ini?</p>
        <div class="flex justify-end gap-2 mt-4">
            <laraliveui:modal.close>
                <laraliveui:button variant="secondary">Batal</laraliveui:button>
            </laraliveui:modal.close>
            <laraliveui:button variant="danger">Hapus</laraliveui:button>
        </div>
    </laraliveui:modal.dialog>
</laraliveui:modal>
```

Buka/tutup modal via Livewire:

```php
$this->modal('confirm-delete')->show();
$this->modal('confirm-delete')->close();
```

## Toast

Tampilkan toast dari komponen Livewire:

```php
$this->toast()->success('Data berhasil disimpan!');
$this->toast()->error('Terjadi kesalahan!');
$this->toast()->warning('Periksa kembali input Anda.');
$this->toast()->info('Pembaruan tersedia.');
```

```blade
<laraliveui:toast />
```

## Callout

```blade
<laraliveui:callout variant="info">
    Info: Sistem akan maintenance pada pukul 22:00 WIB.
</laraliveui:callout>

<laraliveui:callout variant="success">
    Berhasil! Data telah diperbarui.
</laraliveui:callout>

<laraliveui:callout variant="warning">
    Perhatian: Kuota penyimpanan hampir penuh.
</laraliveui:callout>

<laraliveui:callout variant="danger">
    Error: Gagal menyimpan data.
</laraliveui:callout>
```

## Alert

```blade
<laraliveui:alert variant="success" dismissible>
    Data berhasil disimpan!
</laraliveui:alert>
```

## Progress

```blade
<laraliveui:progress :value="$progress" />
<laraliveui:progress :value="75" variant="success" show-label />
```

## Skeleton

```blade
<laraliveui:skeleton class="h-4 w-full" />
<laraliveui:skeleton class="h-8 w-8 rounded-full" />
<laraliveui:skeleton class="h-32 w-full rounded-lg" />
```

## Tooltip

```blade
<laraliveui:tooltip text="Info lengkap">
    <laraliveui:button>Hover saya</laraliveui:button>
</laraliveui:tooltip>
```
