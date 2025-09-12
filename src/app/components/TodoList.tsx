import { Todo } from "./TodoApp";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

export default function TodoList({ todos, deleteTodo, editTodo }: TodoListProps) {
  return (
    <ul className="space-y-2">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      ) : (
        <p className="text-gray-500">No todos found.</p>
      )}
    </ul>
  );
}
