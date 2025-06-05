import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderStyle: 'solid',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: COLORS.black,
    fontSize: 18,
  },
});
