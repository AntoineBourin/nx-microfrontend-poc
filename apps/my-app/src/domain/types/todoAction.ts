import { Todo } from './todo';

export enum TodoAction {
  GET_TODOS = 'GET_TODOS',
  CREATE_TODO = 'CREATE_TODO',
}

export type TodoState = {
  todos: Todo[];
};
