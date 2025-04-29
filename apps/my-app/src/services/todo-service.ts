import { TodoServiceInterface } from '../domain/interface/TodoServiceInterface';

export class TodoService implements TodoServiceInterface {
  getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  };
}
