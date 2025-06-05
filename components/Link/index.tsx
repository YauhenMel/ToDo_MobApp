import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinkProps } from '@/components/Link/types';
import { styles } from '@/components/Link/styles';
import { Text, TouchableOpacity } from 'react-native';

export const Link: FC<LinkProps> = ({ children, to, params }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(to, params);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
