import { TaskType } from './Type';
import { Reward } from './Reward';
import { User } from './User';

export interface Task {
  type: TaskType;
  reward?: Reward;
  createdAt: number;
  description: string;
  title: string;
  assignee?: User;
}