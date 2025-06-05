import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';
import { StatusType } from '@/types';

export const styles = (status: StatusType) =>
  StyleSheet.create({
    container: {
      transform: 'rotate(-6deg)',
      padding: 8,
      width: '40%',
      aspectRatio: 6 / 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: COLORS[status],
      borderColor: COLORS.black,
      borderStyle: 'solid',
    },
    title: {
      color: COLORS.black,
      fontSize: 18,
    },
    executionTime: {
      color: COLORS.black,
      fontSize: 12,
    },
    status: {
      color: COLORS.black,
      fontSize: 12,
    },
  });
