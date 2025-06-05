import { StatusType } from '@/types';

export interface TaskProps {
  id: number;
  title: string;
  status: StatusType;
  executionTime: Date;
}
