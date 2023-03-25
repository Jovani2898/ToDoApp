import {ITask} from '../../components/task/Task';
import {RootTypes} from '../types/root';

export const addTask = (task: ITask) => ({
  type: RootTypes.ADD_TASK,
  payload: task,
});

export const removeTask = (id: string) => ({
  type: RootTypes.REMOVE_TASK,
  payload: id,
});
