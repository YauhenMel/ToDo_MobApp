import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { TaskProps } from '@/components/TaskCard/types';
import { styles } from '@/components/TaskCard/styles';
import { ROUTES } from '@/constants/routes';
import { formatDate } from '@/utils/formatDate';

export const TaskCard: FC<TaskProps> = ({
  id,
  title,
  status,
  executionTime,
}) => {
  const statusLabel = {
    in_progress: 'In progress',
    canceled: 'Canceled',
    completed: 'Completed',
  };

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(ROUTES.task, { id });
  };

  return (
    <TouchableOpacity style={styles(status).container} onPress={handlePress}>
      <Text style={styles(status).title}>{title}</Text>
      <View style={styles(status).executionTime}>
        <Text style={styles(status).executionTime_label}>Execution time:</Text>
        <Text style={styles(status).executionTime_value}>
          {formatDate(new Date(executionTime))}
        </Text>
      </View>
      <Text style={styles(status).status}>{statusLabel[status]}</Text>
    </TouchableOpacity>
  );
};
