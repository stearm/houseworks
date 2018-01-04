import { Reward } from './Reward';

export interface TaskType {
  id: string;
  title: string;
  effort: number;
  reward: Reward;
}