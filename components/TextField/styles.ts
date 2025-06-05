import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';

export const styles = StyleSheet.create({
  label: {
    color: COLORS.black,
  },
  input: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.black,
    borderStyle: 'solid',
    fontSize: 18,
    color: COLORS.error,
  },
  error: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.error,
  },
});
