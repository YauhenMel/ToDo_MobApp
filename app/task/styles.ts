import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  task: {
    position: 'relative',
    padding: 8,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
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
    fontSize: 18,
  },
  executionTime: {
    fontSize: 12,
  },
  description: {
    fontSize: 16,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
