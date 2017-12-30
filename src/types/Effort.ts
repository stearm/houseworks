import { Reward } from '../types/Reward';
import { Task } from '../types/Task';

export interface Effort {
  id: number;
  value: number;
  reward: Reward;
  tasks?: Array<Task>;
}