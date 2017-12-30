import { Reward } from './Reward';

export interface TaskType {
  id: number;
  title: string;
  effort: number;
  reward: Reward;
}