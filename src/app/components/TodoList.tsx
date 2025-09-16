import React from "react";
import { Todo } from "./TodoApp";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  toggleComplete: (id: number) => void;
}

export default function TodoList({
  todos,
  deleteTodo,
  editTodo,
  toggleComplete,
}: TodoListProps) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 p-2 rounded-lg"
        >
          <span
            className={`flex-1 cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() =>
                editTodo(todo.id, prompt("Edit todo:", todo.text) || todo.text)
              }
              className="text-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
