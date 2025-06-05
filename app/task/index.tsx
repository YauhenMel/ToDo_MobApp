import { View, Text } from 'react-native';
import { Button } from '@/components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/app/task/styles';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ITask, StatusType } from '@/types';
import { changeTaskStatus, getTask } from '@/API';

export default function Task() {
  const [task, setTask] = useState<ITask | null>(null);

  const route = useRoute();

  const taskId = route.params?.id;

  useEffect(() => {
    if (taskId) {
      getTask(taskId).then((task) => setTask(task));
    }
  }, [taskId]);

  const handlePressChangeTaskStatus = async (
    taskId: string,
    status: StatusType,
  ) => {
    try {
      await changeTaskStatus(taskId, status);

      setTask((prevState) => prevState && { ...prevState, status });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      {task && (
        <>
          <View style={styles.task}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.executionTime}>
              {task.executionTime.toString()}
            </Text>
            <Text style={styles.description}>{task.description}</Text>
            <Text>{task.status}</Text>
          </View>
          <View style={styles.actions}>
            <Button
              onPress={() => handlePressChangeTaskStatus(task.id, 'canceled')}
            >
              Cancel
            </Button>
            <Button
              filled
              onPress={() => handlePressChangeTaskStatus(task.id, 'completed')}
            >
              Completed
            </Button>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
