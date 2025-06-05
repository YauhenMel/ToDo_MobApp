import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 6,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title_text: {
    fontSize: 26,
  },
  sorter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    rowGap: 8,
  },
  sorterByStatus: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
});
