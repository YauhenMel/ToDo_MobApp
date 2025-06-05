import { StatusType } from '@/types';

export interface TaskProps {
  id: string;
  title: string;
  status: StatusType;
  executionTime: Date;
}
