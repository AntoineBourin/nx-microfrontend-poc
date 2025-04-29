import { useEffect, useState } from 'react';
import TodoView from '../components/todo/TodoView';
import { Todo } from '../domain/types/todo';
import { TodoService } from '../services/todo-service';

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const todoService = new TodoService();
    todoService.getTodos().then(setTodos);
  }, []);

  return <TodoView todos={todos} />;
};

export default TodoContainer;
