export interface Column {
  id: string;
  name: string;
  tasksOrder: string[];
  columnBlocked: string[];
}
export interface Task {
  id: string;
  name: string;
}
export interface Board {
  columns: Column[] | null;
  tasks: Task[] | null;
}
