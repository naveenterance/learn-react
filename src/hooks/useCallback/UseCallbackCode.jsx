// "referential equality".
// Every time a component re-renders, its functions get recreated.
// Because of this, the addTodo function has actually changed.
// So use usecallback

import { useEffect, useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const UseCallbackCode = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const mainPageRender = useRef(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    mainPageRender.current += 1;
  });

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        render :{mainPageRender.current}
        Count: {count}
        <button
          className="bg-red-300 p-2 rounded-lg shadow-lg border-4 hover:border-yellow-400"
          onClick={increment}
        >
          increment count
        </button>
      </div>
    </>
  );
};
export default UseCallbackCode;
