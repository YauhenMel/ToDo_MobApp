import { View, Text } from 'react-native';
import { Button } from '@/components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/app/task/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ITask, StatusType } from '@/types';
import { changeTaskStatus, deleteTask, getTask } from '@/API';
import DateIcon from '@/assets/icons/DateIcon';
import { COLORS } from '@/style/colors';
import { ROUTES } from '@/constants/routes';

export default function Task() {
  const [task, setTask] = useState<ITask | null>(null);

  const navigation = useNavigation();

  const handlePress = () => {};

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

  const handlePressDeleteTask = async (taskId: string) => {
    try {
      await deleteTask(taskId);

      navigation.navigate(ROUTES.root);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      {task && (
        <>
          <View style={styles.task}>
            <View style={styles.task_action}>
              <Button
                onPress={() =>
                  handlePressChangeTaskStatus(task.id, 'in_progress')
                }
              >
                <DateIcon
                  stroke={
                    task.status === 'in_progress'
                      ? COLORS.completed
                      : COLORS.gray
                  }
                  fill={
                    task.status === 'in_progress'
                      ? COLORS.completed
                      : COLORS.gray
                  }
                />
              </Button>
              <Button onPress={() => handlePressDeleteTask(task.id)}>
                <DateIcon stroke={COLORS.black} fill={COLORS.black} />
              </Button>
            </View>
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
