import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const MemoCode = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const mainPageRender = useRef(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    mainPageRender.current += 1;
  });

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div className="bd">
        <p className="h3">render :{mainPageRender.current}</p>
        <p className="h3">Count: {count}</p>
        <button className="btn" onClick={increment}>
          increment count
        </button>
      </div>
    </>
  );
};
export default MemoCode;
