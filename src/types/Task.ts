import { TaskType } from './Type';
import { User } from './User';

export interface Task {
  type: TaskType;
  createdAt: number;
  description: string;
  assignee: User;
}