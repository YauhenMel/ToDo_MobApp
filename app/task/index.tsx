import { View, Text } from 'react-native';
import { Button } from '@/components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/app/task/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ITask, StatusType } from '@/types';
import { changeTaskStatus, deleteTask, getTask } from '@/API';
import { COLORS } from '@/style/colors';
import { ROUTES } from '@/constants/routes';
import { formatDate } from '@/utils/formatDate';
import InProgressIcon from '@/assets/icons/InProgressIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';

export default function Task() {
  const [task, setTask] = useState<ITask | null>(null);

  const statusLabel = {
    in_progress: 'In progress',
    canceled: 'Canceled',
    completed: 'Completed',
  };

  const navigation = useNavigation();

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
                <InProgressIcon
                  stroke={
                    task.status === 'in_progress'
                      ? COLORS.in_progress
                      : COLORS.black
                  }
                />
              </Button>
              <Button onPress={() => handlePressDeleteTask(task.id)}>
                <DeleteIcon stroke={COLORS.black} fill={COLORS.black} />
              </Button>
            </View>
            <Text style={styles.title}>{task.title}</Text>
            <View style={styles.executionTime}>
              <Text style={styles.executionTime_label}>Execution time:</Text>
              <Text style={styles.executionTime_value}>
                {formatDate(new Date(task.executionTime))}
              </Text>
            </View>
            <Text style={styles.description}>{task.description}</Text>
            <Text
              style={[styles.status, { backgroundColor: COLORS[task.status] }]}
            >
              {statusLabel[task.status]}
            </Text>
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
