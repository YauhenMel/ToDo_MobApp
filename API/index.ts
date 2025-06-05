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

export const addTask = async (task: CreateTaskDto): Promise<ITask> => {
  const response = await instance.post('/task', {
    ...task,
    status: 'in_progress',
    createdAt: new Date(),
  });

  return response.data;
};
