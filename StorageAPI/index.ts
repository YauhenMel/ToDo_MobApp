import { ITask, StatusType } from '@/types';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTasks = async ({ createdAt, status }): Promise<ITask[]> => {
  try {
    const keys = await AsyncStorage.getAllKeys();

    const items = await AsyncStorage.multiGet(keys);

    const tasks = items.map(
      ([_, value]) => value && JSON.parse(value),
    ) as ITask[];

    if (createdAt && status) {
      return tasks.filter(
        (task) => task.createdAt === createdAt && task.status === status,
      );
    } else if (status) {
      return tasks.filter((task) => task.status === status);
    } else if (createdAt) {
      return tasks.filter((task) => task.createdAt === createdAt);
    }

    return tasks;
  } catch (error) {
    console.error('Error get tasks by id:', error);
    return [];
  }
};

export const getTask = async (id: string): Promise<ITask | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(id);

    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error get task by id:', error);

    return null;
  }
};

export const addTask = async (task: ITask): Promise<ITask | null> => {
  try {
    await AsyncStorage.setItem(task.id, JSON.stringify(task));

    return task;
  } catch (error) {
    console.error('Error saving todo:', error);

    return null;
  }
};

export const changeTaskStatus = async (
  id: string,
  status: StatusType,
): Promise<string | null> => {
  try {
    await AsyncStorage.mergeItem(id, JSON.stringify({ status }));

    return id;
  } catch (error) {
    console.error('Error updating task:', error);

    return null;
  }
};

export const deleteTask = async (id: string): Promise<string | null> => {
  try {
    await AsyncStorage.removeItem(id);

    return id;
  } catch (error) {
    console.error('Error deleting todo', error);

    return null;
  }
};
