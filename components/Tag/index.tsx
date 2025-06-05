import { FC } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { TagProps } from '@/components/Tag/types';
import { styles } from '@/components/Tag/styles';
import { ROUTES } from '@/constants/routes';

export const Tag: FC<TagProps> = ({ status, label }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const handlePress = () => {
    navigation.navigate(ROUTES.root, { status });
  };

  const isActive =
    route.name === ROUTES.root && route.params?.status === status;

  return (
    <TouchableOpacity style={styles(isActive).container} onPress={handlePress}>
      <Text style={styles(isActive).text}>#{label}</Text>
    </TouchableOpacity>
  );
};
