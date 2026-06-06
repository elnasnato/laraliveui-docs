---
sidebar_position: 4
---

# Data Display

Komponen untuk menampilkan data.

## Table

```blade
<laraliveui:table>
    <laraliveui:table.columns>
        <laraliveui:table.column label="Nama" sortable />
        <laraliveui:table.column label="Email" sortable />
        <laraliveui:table.column label="Role" />
        <laraliveui:table.column label="Aksi" align="right" />
    </laraliveui:table.columns>
    <laraliveui:table.rows>
        @foreach($users as $user)
            <laraliveui:table.row>
                <laraliveui:table.cell>{{ $user->name }}</laraliveui:table.cell>
                <laraliveui:table.cell>{{ $user->email }}</laraliveui:table.cell>
                <laraliveui:table.cell>
                    <laraliveui:badge>{{ $user->role }}</laraliveui:badge>
                </laraliveui:table.cell>
                <laraliveui:table.cell>
                    <laraliveui:button size="sm">Edit</laraliveui:button>
                </laraliveui:table.cell>
            </laraliveui:table.row>
        @endforeach
    </laraliveui:table.rows>
</laraliveui:table>
```

## Accordion

```blade
<laraliveui:accordion>
    <laraliveui:accordion.item title="Bagian 1">
        Konten bagian 1
    </laraliveui:accordion.item>
    <laraliveui:accordion.item title="Bagian 2">
        Konten bagian 2
    </laraliveui:accordion.item>
</laraliveui:accordion>
```

## Avatar

```blade
<laraliveui:avatar src="/img/photo.jpg" alt="Foto Profil" />
<laraliveui:avatar initials="JD" />
<laraliveui:avatar size="lg" src="/img/photo.jpg" />
```

## Badge

```blade
<laraliveui:badge variant="success">Aktif</laraliveui:badge>
<laraliveui:badge variant="warning">Pending</laraliveui:badge>
<laraliveui:badge variant="danger">Diblokir</laraliveui:badge>
<laraliveui:badge variant="info">Baru</laraliveui:badge>
```

## Combobox / Autocomplete

```blade
<laraliveui:combobox name="user" :options="$users" />
<laraliveui:autocomplete name="negara" :options="$negara" />
```

## Timeline

```blade
<laraliveui:timeline>
    <laraliveui:timeline.item title="Pendaftaran" date="2024-01-01">
        User mendaftar akun
    </laraliveui:timeline.item>
    <laraliveui:timeline.item title="Verifikasi" date="2024-01-02">
        Email diverifikasi
    </laraliveui:timeline.item>
</laraliveui:timeline>
```
