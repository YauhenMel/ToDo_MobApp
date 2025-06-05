import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';

export const styles = (isActive: boolean) =>
  StyleSheet.create({
    container: {
      padding: 5,
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: isActive ? COLORS.primary : 'transparent',
      borderWidth: 1,
      borderColor: COLORS.black,
      borderStyle: 'solid',
    },
    text: {
      color: COLORS.black,
      fontSize: 12,
    },
  });
