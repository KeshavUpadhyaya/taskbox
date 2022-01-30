import { moduleMetadata, Meta, Story, storiesOf } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';
import { TaskState } from './task.model';

export default {
  component: TaskComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Task',
} as Meta;

export const Default: Story = () => ({
  props: {
    task: {
      id: '1',
      title: 'Test Task',
      state: TaskState.TASK_DEFAULT,
    },
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
  },
});

export const Pinned: Story = () => ({
  props: {
    task: {
      id: '1',
      title: 'Test Task',
      state: TaskState.TASK_PINNED,
    },
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
  },
});

export const Archived: Story = () => ({
  props: {
    task: {
      id: '1',
      title: 'Test Task',
      state: TaskState.TASK_ARCHIVED,
    },
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
  },
});
