import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  date: {
    paddingRight: 18,
    fontSize: 14,
    color: COLORS.black,
  },
  border: {
    flex: 1,
    height: 2,
    paddingRight: 6,
    backgroundColor: COLORS.black,
  },
});
