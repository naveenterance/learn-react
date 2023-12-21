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
export default MemoCode;
