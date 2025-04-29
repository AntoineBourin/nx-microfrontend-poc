import { Todo } from '../../domain/types/todo';

const TodoView = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoView;
