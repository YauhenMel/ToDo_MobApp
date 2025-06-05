import { StyleSheet } from 'react-native';
import { COLORS } from '@/style/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  task: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    padding: 20,
    rowGap: 20,
    alignItems: 'center',
    borderStyle: 'solid',
  },
  task_action: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    top: 2,
    right: 2,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 28,
    fontWeight: '500',
    color: COLORS.black,
  },
  executionTime: {
    alignSelf: 'flex-start',
  },
  executionTime_label: {
    color: COLORS.black,
    fontSize: 18,
  },
  executionTime_value: {
    color: COLORS.black,
    fontSize: 16,
  },
  description: {
    textAlign: 'justify',
    flex: 1,
    width: '100%',
    paddingVertical: 20,
    fontSize: 16,
    color: COLORS.black,
  },
  status: {
    padding: 10,
    borderRadius: 20,
    alignSelf: 'flex-end',
    color: COLORS.black,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 20,
  },
});
