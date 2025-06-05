import { ScrollView } from 'react-native';
import { ITask } from '@/types';
import { TaskCard } from '@/components/TaskCard';
import { styles } from '@/app/root/styles';
import { useEffect, useState } from 'react';
import { getTasks } from '@/API';
import { useRoute } from '@react-navigation/native';

export default function Root() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const route = useRoute();

  const statusParam = route.params?.status;
  const createdAtParam = route.params?.createdAt;

  useEffect(() => {
    if (statusParam) {
      getTasks({ status: statusParam })
        .then((tasks) => setTasks(tasks))
        .catch(() => {
          setTasks([]);
        });
    } else if (createdAtParam) {
      getTasks({ createdAt: createdAtParam })
        .then((tasks) => setTasks(tasks))
        .catch(() => {
          setTasks([]);
        });
    } else {
      getTasks()
        .then((tasks) => setTasks(tasks))
        .catch(() => {
          setTasks([]);
        });
    }
  }, [statusParam, createdAtParam]);

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
