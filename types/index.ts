export type StatusType = 'in_progress' | 'completed' | 'canceled';

export interface ITask {
  title: string;
  location: string;
  executionTime: Date;
  description: string;
}
