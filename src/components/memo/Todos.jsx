import { useRef, useEffect } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  const todoPageRender = useRef(0);

  useEffect(() => {
    todoPageRender.current += 1;
  });
  return (
    <>
      <p>Todopage rerender: {todoPageRender.current}</p>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default Todos;
