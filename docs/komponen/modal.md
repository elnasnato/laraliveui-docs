---
sidebar_position: 2
---

# Modal

Menampilkan konten di atas halaman utama. Ideal untuk konfirmasi, alert, dan form.

```blade
<laraliveui:modal.trigger name="edit-profile">
    <laraliveui:button>Edit Profile</laraliveui:button>
</laraliveui:modal.trigger>

<laraliveui:modal name="edit-profile" class="md:w-96">
    <div class="space-y-6">
        <div>
            <laraliveui:heading size="lg">Update Profile</laraliveui:heading>
            <laraliveui:text class="mt-2">Ubah detail personal Anda.</laraliveui:text>
        </div>
        <laraliveui:input label="Nama" placeholder="Nama Anda" />
        <laraliveui:input label="Tanggal Lahir" type="date" />
        <div class="flex">
            <laraliveui:spacer />
            <laraliveui:button type="submit" variant="primary">Simpan</laraliveui:button>
        </div>
    </div>
</laraliveui:modal>
```

## Nama Modal Unik

Jika modal ditempatkan di dalam loop, pastikan nama dinamis.

```blade
@foreach ($users as $user)
    <laraliveui:modal :name="'edit-profile-'.$user->id">
        ...
    </laraliveui:modal>
@endforeach
```

## Livewire Methods

Kontrol modal langsung dari Livewire:

```php
// Buka modal
$this->modal('confirm')->show();
Laraliveui::modal('confirm')->show();

// Tutup modal
$this->modal('confirm')->close();
Laraliveui::modal('confirm')->close();

// Tutup semua modal
$this->modals()->close();
Laraliveui::modals()->close();
```

## JavaScript Methods

Kontrol modal dari Alpine.js:

```blade
<button x-on:click="$laraliveui.modal('confirm').show()">Buka</button>
<button x-on:click="$laraliveui.modal('confirm').close()">Tutup</button>
<button x-on:click="$laraliveui.modals().close()">Tutup Semua</button>
```

Atau dari JavaScript global:

```js
Laraliveui.modal('confirm').show();
Laraliveui.modal('confirm').close();
Laraliveui.modals().close();
```

## Data Binding

Gunakan `wire:model` untuk kontrol state dari Livewire:

```blade
<laraliveui:modal wire:model.self="showConfirmModal">
    ...
</laraliveui:modal>
```

```php
public $showConfirmModal = false;

public function delete()
{
    $this->showConfirmModal = true;
}
```

## Close Events

```blade
<laraliveui:modal wire:close="someLivewireAction">
    ...
</laraliveui:modal>
```

## Cancel Events

Dijalankan saat klik di luar modal atau tekan ESC:

```blade
<laraliveui:modal wire:cancel="someLivewireAction">
    ...
</laraliveui:modal>
```

## Disable Click Outside

```blade
<laraliveui:modal :dismissible="false">
    ...
</laraliveui:modal>
```

## Scrolling Long Content

```blade
<laraliveui:modal name="terms" scroll="body">
    <!-- Konten panjang seperti syarat & ketentuan -->
</laraliveui:modal>
```

## Konfirmasi

```blade
<laraliveui:modal.trigger name="delete-project">
    <laraliveui:button variant="danger">Hapus</laraliveui:button>
</laraliveui:modal.trigger>

<laraliveui:modal name="delete-project" class="min-w-[22rem]">
    <div class="space-y-6">
        <div>
            <laraliveui:heading size="lg">Hapus Project?</laraliveui:heading>
            <laraliveui:text class="mt-2">
                Anda akan menghapus project ini.<br>Tindakan ini tidak dapat dibatalkan.
            </laraliveui:text>
        </div>
        <div class="flex gap-2">
            <laraliveui:spacer />
            <laraliveui:modal.close>
                <laraliveui:button variant="ghost">Batal</laraliveui:button>
            </laraliveui:modal.close>
            <laraliveui:button type="submit" variant="danger">Hapus Project</laraliveui:button>
        </div>
    </div>
</laraliveui:modal>
```

## Flyout

Gunakan prop `flyout` untuk dialog yang lebih anchored.

```blade
<laraliveui:modal.trigger name="edit-profile">
    <laraliveui:button>Edit Profile</laraliveui:button>
</laraliveui:modal.trigger>

<laraliveui:modal name="edit-profile" flyout>
    <div class="space-y-6">
        <laraliveui:heading size="lg">Update Profile</laraliveui:heading>
        <laraliveui:subheading>Ubah detail personal Anda.</laraliveui:subheading>
        <laraliveui:input label="Nama" placeholder="Nama Anda" />
    </div>
    <x-slot name="footer" class="flex items-center justify-end gap-2">
        <laraliveui:modal.close>
            <laraliveui:button variant="filled">Batal</laraliveui:button>
        </laraliveui:modal.close>
        <laraliveui:button type="submit" variant="primary">Simpan</laraliveui:button>
    </x-slot>
</laraliveui:modal>
```

### Posisi Flyout

```blade
<laraliveui:modal flyout position="left">...</laraliveui:modal>
<laraliveui:modal flyout position="right">...</laraliveui:modal>
<laraliveui:modal flyout position="bottom">...</laraliveui:modal>
```

### Floating Flyout

```blade
<laraliveui:modal flyout variant="floating" class="md:w-lg">
    ...
</laraliveui:modal>
```

## Referensi

### `laraliveui:modal`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `name` | Identifikasi unik modal | — |
| `flyout` | Tampilkan sebagai flyout | `false` |
| `variant` | Gaya: `default`, `floating`, `bare` | `default` |
| `position` | Posisi flyout: `right`, `left`, `bottom` | `right` |
| `scroll` | Perilaku scroll: `body` | — |
| `dismissible` | Tutup saat klik luar | `true` |
| `closable` | Tampilkan tombol tutup | `true` |
| `wire:model` | Binding Livewire untuk state terbuka | — |

| Event | Deskripsi |
|-------|-----------|
| `close` | Dipicu saat modal ditutup |
| `cancel` | Dipicu saat modal dibatalkan (klik luar/ESC) |

### `laraliveui:modal.trigger`

| Prop | Deskripsi |
|------|-----------|
| `name` | Nama modal yang akan dipicu |
| `shortcut` | Shortcut keyboard (e.g., `cmd.k`) |

### `laraliveui:modal.close`

Tombol tutup modal. Bungkus elemen apapun di dalamnya.
