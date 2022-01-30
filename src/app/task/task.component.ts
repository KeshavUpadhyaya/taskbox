import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task, TaskState } from './task.model';

@Component({
  selector: 'app-task',
  template: `
   <div class="list-item {{ task?.state }}">
     <label class="checkbox">
       <input
         type="checkbox"
         [defaultChecked]="task?.state === taskState.TASK_ARCHIVED"
         disabled="true"
         name="checked"
       />
       <span class="checkbox-custom" (click)="onArchive(task.id)" attr.aria-label="archiveTask-{{ task?.id }}"></span>
     </label>
     <div class="title">
       <input
         type="text"
         [value]="task?.title"
         readonly="true"
         placeholder="Input title"
       />
     </div>
     <div class="actions">
       <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
         <span class="icon-star" attr.aria-label="pinTask-{{ task?.id }}"></span>
       </a>
     </div>
   </div>
  `,
})
export class TaskComponent {
  @Input() task: Task;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();

  taskState = TaskState;
  onPin(id: any): void {
    if (this.task.state !== TaskState.TASK_PINNED) {
      this.task.state = TaskState.TASK_PINNED;
    } else {
      this.task.state = TaskState.TASK_DEFAULT;
    }
    this.onPinTask.emit(id);
  }

  onArchive(id: any): void {
    if (this.task.state !== TaskState.TASK_ARCHIVED) {
      this.task.state = TaskState.TASK_ARCHIVED;
    } else {
      this.task.state = TaskState.TASK_DEFAULT;
    }
    this.onArchiveTask.emit(id);
  }

}
