import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { TaskProps } from '@/components/TaskCard/types';
import { styles } from '@/components/TaskCard/styles';

export const TaskCard: FC<TaskProps> = ({
  id,
  title,
  status,
  executionTime,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('task/' + id);
  };

  return (
    <TouchableOpacity style={styles(status).container} onPress={handlePress}>
      <Text style={styles(status).title}>{title}</Text>
      <Text style={styles(status).executionTime}>
        {executionTime.toString()}
      </Text>
      <Text style={styles(status).status}>{status}</Text>
    </TouchableOpacity>
  );
};
