import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.black,
    borderStyle: 'solid',
    fontSize: 18,
  },
  error: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.error,
  },
  datePickerButton: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
});
