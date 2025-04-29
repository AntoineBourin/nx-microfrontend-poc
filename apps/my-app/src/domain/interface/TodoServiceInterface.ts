import { Todo } from '../types/todo';

export interface TodoServiceInterface {
  getTodos: () => Promise<Todo[]>;
  createTodo?: (todo: Todo) => Promise<Todo>;
}
