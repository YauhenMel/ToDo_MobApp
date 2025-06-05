import { ScrollView } from 'react-native';
import { StatusType } from '@/types';
import { TaskCard } from '@/components/TaskCard';
import { styles } from '@/app/root/styles';

const tasks: {
  id: number;
  title: string;
  status: StatusType;
  executionTime: Date;
}[] = [
  {
    id: 1,
    title: 'Task 1',
    status: 'canceled',
    executionTime: new Date('2020-11-25T12:37'),
  },
  {
    id: 2,
    title: 'Task 2',
    status: 'in_progress',
    executionTime: new Date('2022-03-22T18:07'),
  },
  {
    id: 3,
    title: 'Taskdffd 3',
    status: 'completed',
    executionTime: new Date('2025-02-12T09:37'),
  },
  {
    id: 4,
    title: 'fdfdbvvcxvxv 2',
    status: 'in_progress',
    executionTime: new Date('2024-10-16T22:34'),
  },
  {
    id: 5,
    title: 'Taskcxcx 3',
    status: 'completed',
    executionTime: new Date('2025-08-19T17:04'),
  },
  {
    id: 6,
    title: 'Tasdsfdsfsdk 2',
    status: 'in_progress',
    executionTime: new Date('2025-10-08T11:14'),
  },
  {
    id: 7,
    title: 'Tascxcvcxvk 3',
    status: 'completed',
    executionTime: new Date('2023-08-14T11:55'),
  },
  {
    id: 8,
    title: 'Taskfddddcxcx dssdffdds 2',
    status: 'in_progress',
    executionTime: new Date('2023-08-14T11:12'),
  },
  {
    id: 9,
    title: 'Task 3',
    status: 'completed',
    executionTime: new Date('2023-08-14T11:33'),
  },
  {
    id: 10,
    title: 'xcxcvfddfd 2',
    status: 'in_progress',
    executionTime: new Date('2023-10-14T11:55'),
  },
  {
    id: 11,
    title: 'Tsddsfsfdsfdsds fdw  fwef wewfwfefefw ewwf!',
    status: 'completed',
    executionTime: new Date('2023-08-14T11:00'),
  },
  {
    id: 12,
    title: 'Task 2',
    status: 'in_progress',
    executionTime: new Date('2023-08-14T23:59'),
  },
  {
    id: 13,
    title: 'Task 3',
    status: 'completed',
    executionTime: new Date('2023-08-14T00:00'),
  },
];

export default function Root() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {tasks.map(({ title, status, id, executionTime }) => (
        <TaskCard
          key={id}
          id={id}
          title={title}
          status={status}
          executionTime={executionTime}
        />
      ))}
    </ScrollView>
  );
}
