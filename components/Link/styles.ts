import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderStyle: 'solid',
  },
  text: {
    color: COLORS.black,
    fontSize: 18,
  },
});
