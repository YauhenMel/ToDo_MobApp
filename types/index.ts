export type StatusType = 'in_progress' | 'completed' | 'canceled';

export interface ITask {
  id: string;
  title: string;
  status: StatusType;
  location: string;
  executionTime: Date;
  description: string;
  createdAt: Date;
}
