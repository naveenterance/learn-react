import React, { useReducer, useState } from "react";

// Define the initial state
const initialState = {
  todos: [],
};

// Define the reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const UseReducerCode = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  // Add todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Date.now(),
          text: newTodo,
          completed: false,
        },
      });
      setNewTodo("");
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };

  // Remove todo
  const removeTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  return (
    <div>
      <p className="h3">Todo List</p>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo} className="btn">
        Add
      </button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id} className="h4  flex items-center justify-between">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              className={` ${todo.completed ? "line-through" : "underline"}   `}
            >
              {todo.text}
            </span>

            <button onClick={() => removeTodo(todo.id)} className="btn">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerCode;
