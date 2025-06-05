import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 6,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  title_text: {
    color: COLORS.black,
    fontSize: 36,
    fontWeight: '500',
  },
  sorter: {
    paddingLeft: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sorterByStatus: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 4,
    marginRight: 4,
  },
});
