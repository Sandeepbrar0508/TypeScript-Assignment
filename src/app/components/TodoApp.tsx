"use client";
import { useState } from "react";
import TodoList from "./TodoList";

export interface Todo {
  id: number;
  text: string;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  // Add Todo
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  // Delete Todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit Todo
  const editTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Search Filter
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      {/* Add Todo */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          className="flex-1 border rounded-lg p-2"
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-2 mb-4"
      />

      {/* Todo List */}
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}
