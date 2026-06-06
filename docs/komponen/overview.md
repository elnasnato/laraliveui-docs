---
sidebar_position: 1
---

# Ikhtisar Komponen

Semua komponen LaraLiveUI menggunakan prefix `laraliveui:` dengan dot notation untuk sub-komponen.

## Daftar Komponen Gratis

### Basic Input
- Badge, Button, Checkbox, Color Picker, Field, File Upload, Input, OTP Input, Radio, Select, Slider, Switch, Text, Textarea

### Navigation
- Breadcrumbs, Dropdown, Navbar, Navlist, Pagination, Tabs

### Data Display
- Accordion, Autocomplete, Avatar, Combobox, Command, Table, Timeline, Tree View

### Feedback
- Alert, Callout, Modal, Progress, Skeleton, Toast, Tooltip

### Layout
- Card, Layout (Header, Sidebar, Main, Footer), Separator

### Lainnya
- Brand, Context Menu, Date Picker, Editor, Heading, Icon, Kanban, Pillbox, Popover, Time Picker

## Pola Penggunaan

### Komponen Dasar

```blade
<laraliveui:button variant="primary" size="base">
    Klik Saya
</laraliveui:button>
```

### Sub-Komponen (Dot Notation)

```blade
<laraliveui:modal name="my-modal">
    <laraliveui:modal.trigger>
        <laraliveui:button>Buka Modal</laraliveui:button>
    </laraliveui:modal.trigger>
    <laraliveui:modal.dialog>
        <h2>Judul Modal</h2>
        <p>Konten modal.</p>
    </laraliveui:modal.dialog>
</laraliveui:modal>
```

### Input Group

```blade
<laraliveui:input.group>
    <laraliveui:input.group.prefix>https://</laraliveui:input.group.prefix>
    <laraliveui:input name="url" placeholder="example.com" />
    <laraliveui:input.group.suffix>.com</laraliveui:input.group.suffix>
</laraliveui:input.group>
```

### Dropdown + Menu

```blade
<laraliveui:dropdown>
    <laraliveui:dropdown.trigger>
        <laraliveui:button>Menu</laraliveui:button>
    </laraliveui:dropdown.trigger>
    <laraliveui:menu>
        <laraliveui:menu.item>Profile</laraliveui:menu.item>
        <laraliveui:menu.item>Settings</laraliveui:menu.item>
        <laraliveui:menu.separator />
        <laraliveui:menu.item>Logout</laraliveui:menu.item>
    </laraliveui:menu>
</laraliveui:dropdown>
```

### Table

```blade
<laraliveui:table>
    <laraliveui:table.columns>
        <laraliveui:table.column label="Nama" />
        <laraliveui:table.column label="Email" />
    </laraliveui:table.columns>
    <laraliveui:table.rows>
        <laraliveui:table.row>
            <laraliveui:table.cell>John Doe</laraliveui:table.cell>
            <laraliveui:table.cell>john@example.com</laraliveui:table.cell>
        </laraliveui:table.row>
    </laraliveui:table.rows>
</laraliveui:table>
```
