import { TodoAction, TodoState } from '../domain/types/todoAction';

const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (
  state: TodoState = initialState,
  action: { type: any; payload?: any }
) => {
  switch (action.type) {
    case TodoAction.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case TodoAction.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
