import { useRef, useEffect, memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  const todoPageRender = useRef(0);

  useEffect(() => {
    todoPageRender.current += 1;
  });
  return (
    <>
      <p className="h3">Todopage rerender: {todoPageRender.current}</p>
      <p className="h3">My Todos</p>
      {todos.map((todo, index) => {
        return (
          <p key={index} className="h3">
            {todo}
          </p>
        );
      })}
      <button onClick={addTodo} className="btn">
        Add Todo
      </button>
    </>
  );
};

export default memo(Todos);
