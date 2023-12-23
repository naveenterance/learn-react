//The useEffect runs by default after every render of the component.
//To fix this performance issue,
// we can use the useMemo Hook to memoize the expensiveCalculation function.
//This will cause the function to only run when needed.

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const UseMemoCode = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const mainPageRender = useRef(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

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
        <p className="h3"> render :{mainPageRender.current}</p>
        <p className="h3">Count: {count}</p>
        <button className="btn" onClick={increment}>
          increment count
        </button>
        <div className="h3">Expensive Calculation: {calculation}</div>
      </div>
    </>
  );
};
export default UseMemoCode;
