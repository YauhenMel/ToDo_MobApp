import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';
import { StatusType } from '@/types';

export const styles = (status: StatusType) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transform: `rotate(-6deg)`,
      transitionProperty: 'transform',
      transitionDuration: '2s',
      transitionDelay: '1s',
      padding: 8,
      width: '44%',
      aspectRatio: 6 / 7,
      borderRadius: 20,
      backgroundColor: COLORS[status],
      borderColor: COLORS.black,
    },
    title: {
      textTransform: 'uppercase',
      textAlign: 'left',
      maxHeight: '60%',
      color: COLORS.black,
      fontWeight: 500,
      fontSize: 18,
    },
    executionTime: {
      display: 'flex',
      rowGap: 8,
      width: '100%',
    },
    executionTime_label: {
      textAlign: 'left',
      textDecorationStyle: 'solid',
      textDecorationLine: 'underline',
      color: COLORS.black,
    },
    executionTime_value: {
      width: '100%',
      textAlign: 'left',
      color: COLORS.black,
    },
    status: {
      backgroundColor: COLORS.white,
      textAlign: 'right',
      alignSelf: 'flex-end',
      padding: 6,
      borderRadius: 20,
      color: COLORS.black,
      fontSize: 12,
    },
  });
