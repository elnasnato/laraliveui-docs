---
sidebar_position: 45
---

# Kanban

Komponen papan Kanban untuk workflow manajemen tugas.

```blade
<laraliveui:kanban>
    <laraliveui:kanban.column title="To Do">
        <laraliveui:kanban.card>Task 1</laraliveui:kanban.card>
        <laraliveui:kanban.card>Task 2</laraliveui:kanban.card>
    </laraliveui:kanban.column>
    <laraliveui:kanban.column title="In Progress">
        <laraliveui:kanban.card>Task 3</laraliveui:kanban.card>
    </laraliveui:kanban.column>
</laraliveui:kanban>
```

## Referensi

### `laraliveui:kanban`

Container kanban. Tidak memiliki props.

### `laraliveui:kanban.column`

| Prop | Deskripsi |
|------|-----------|
| `title` | Judul kolom |

### `laraliveui:kanban.card`

| Prop | Deskripsi | Default |
|------|-----------|---------|
| `draggable` | Izinkan drag | `true` |
