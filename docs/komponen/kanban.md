---
sidebar_position: 45
---

# Kanban

Komponen papan Kanban untuk workflow manajemen tugas.

```blade
<laraliveui:kanban>
    <laraliveui:kanban.column title="To Do">
        <laraliveui:kanban.card title="Task 1" description="Deskripsi task" />
        <laraliveui:kanban.card title="Task 2" description="Deskripsi task" />
    </laraliveui:kanban.column>
    <laraliveui:kanban.column title="In Progress">
        <laraliveui:kanban.card title="Task 3" description="Sedang dikerjakan" />
    </laraliveui:kanban.column>
    <laraliveui:kanban.column title="Done">
        <laraliveui:kanban.card title="Task 4" description="Selesai" />
    </laraliveui:kanban.column>
</laraliveui:kanban>
```

## Referensi

### `laraliveui:kanban.column`

| Prop | Deskripsi |
|------|-----------|
| `title` | Judul kolom |

### `laraliveui:kanban.card`

| Prop | Deskripsi |
|------|-----------|
| `title` | Judul card |
| `description` | Deskripsi card |
