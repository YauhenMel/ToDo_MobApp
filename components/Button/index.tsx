import { Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import { ButtonProps } from '@/components/Button/types';
import { styles } from '@/components/Button/styles';

export const Button: FC<ButtonProps> = ({ onPress, filled, children }) => (
  <TouchableOpacity
    style={styles(filled).container}
    onPress={onPress}
    accessible
  >
    <Text style={styles(filled).text}>{children}</Text>
  </TouchableOpacity>
);
