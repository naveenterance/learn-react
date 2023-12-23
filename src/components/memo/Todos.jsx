import { useRef, useEffect, memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  const todoPageRender = useRef(0);

  useEffect(() => {
    todoPageRender.current += 1;
  });
  return (
    <div className="bd">
      <p className="h3">Todopage rerender: {todoPageRender.current}</p>
      <p className="h4">My Todos</p>
      {todos.map((todo, index) => {
        return <p key={index}>#{todo}</p>;
      })}
    </div>
  );
};

export default memo(Todos);
