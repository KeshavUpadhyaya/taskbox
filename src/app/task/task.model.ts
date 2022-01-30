export enum TaskState {
  TASK_PINNED = 'TASK_PINNED',
  TASK_ARCHIVED = 'TASK_ARCHIVED',
  TASK_DEFAULT = 'TASK_DEFAULT'
}

export interface Task {
  id: string;
  title: string;
  state: TaskState;
}
