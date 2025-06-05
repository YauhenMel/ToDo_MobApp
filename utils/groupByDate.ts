import { ITask } from '@/types';
import { formatDateWithoutTime } from '@/utils/formatDate';

export const groupByDate = (tasks: ITask[]) => {
  const callback = ({ createdAt }) =>
    formatDateWithoutTime(new Date(createdAt));

  return tasks.reduce((accumulator, item) => {
    const key = callback(item);
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(item);
    return accumulator;
  }, {});
};
