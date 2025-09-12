"use client";
import { useState } from "react";
import { Todo } from "./TodoApp";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

export default function TodoItem({ todo, deleteTodo, editTodo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    if (text.trim() === "") return;
    editTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          className="flex-1 border rounded-lg p-1 mr-2"
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 rounded-lg"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-2 py-1 rounded-lg"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white px-2 py-1 rounded-lg"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
