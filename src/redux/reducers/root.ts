import {RootTypes} from '../types/root';

interface Task {
  id: string;
  text: string;
}

interface RootState {
  tasks: Task[];
}

const initialState: RootState = {
  tasks: [],
};

export const RootReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case RootTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case RootTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};
