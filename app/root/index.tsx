import { ScrollView, View } from 'react-native';
import { TaskCard } from '@/components/TaskCard';
import { styles } from '@/app/root/styles';
import { useEffect, useState } from 'react';
import { getTasks } from '@/API';
import { useRoute } from '@react-navigation/native';
import { DateTitle } from '@/components/DateTitle';
import { groupByDate } from '@/utils/groupByDate';

export default function Root() {
  const [tasks, setTasks] = useState<any>();

  const route = useRoute();

  const statusParam = route.params?.status;
  const createdAtParam = route.params?.createdAt;

  useEffect(() => {
    if (statusParam) {
      getTasks({ status: statusParam })
        .then((tasks) => {
          const groupedTasks = groupByDate(tasks);

          setTasks(groupedTasks);
        })
        .catch(() => {
          setTasks([]);
        });
    } else if (createdAtParam) {
      getTasks({ createdAt: createdAtParam })
        .then((tasks) => {
          const groupedTasks = groupByDate(tasks);

          setTasks(groupedTasks);
        })
        .catch(() => {
          setTasks([]);
        });
    } else {
      getTasks()
        .then((tasks) => {
          const groupedTasks = groupByDate(tasks);

          setTasks(groupedTasks);
        })
        .catch((error) => {
          setTasks([]);
        });
    }
  }, [statusParam, createdAtParam]);

  return (
    <ScrollView>
      {tasks &&
        Object.keys(tasks).map((createdAt) => {
          return (
            <View key={createdAt}>
              <DateTitle date={createdAt} />
              <View style={styles.container}>
                {tasks[createdAt].map(
                  ({ id, title, status, executionTime }) => (
                    <TaskCard
                      key={id}
                      id={id}
                      title={title}
                      status={status}
                      executionTime={executionTime}
                    />
                  ),
                )}
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
}
