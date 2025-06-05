import axios from 'axios';
import { ITask, StatusType } from '@/types';
import { CreateTaskDto } from '@/app/add-task/types';

const BASE_URL = `https://${process.env.EXPO_PUBLIC_MOCK_API_KEY}.mockapi.io/api/v1/`;

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTasks = async (
  params?: { status: StatusType } | { createdAt: Date },
): Promise<ITask[]> => {
  const response = await instance.get('/task', { params });

  return response.data;
};

export const getTask = async (id: string): Promise<ITask> => {
  const response = await instance.get('/task', { params: { id } });

  return response.data[0];
};

export const addTask = async (task: CreateTaskDto): Promise<ITask> => {
  const response = await instance.post('/task', {
    ...task,
    status: 'in_progress',
    createdAt: new Date(),
  });

  return response.data;
};

export const changeTaskStatus = async (
  id: string,
  status: StatusType,
): Promise<ITask> => {
  const response = await instance.put('/task/' + id, {
    status,
  });

  return response.data;
};
