import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';

export const styles = (filled?: boolean) =>
  StyleSheet.create({
    container: {
      padding: 8,
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: filled ? COLORS.primary : 'transparent',
      borderWidth: 1,
      borderColor: filled ? COLORS.black : 'transparent',
      borderStyle: 'solid',
    },
    text: {
      color: COLORS.black,
      fontSize: 18,
    },
  });
