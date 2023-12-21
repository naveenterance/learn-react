import React, { useState } from "react";

const UseStateCode = () => {
  const [data, setData] = useState("Initial value");

  const handleClick = (value) => {
    setData(value);
  };

  return (
    <>
      <button onClick={() => handleClick("First Button pressed")}>First</button>
      <button>{data}</button>
      <button onClick={() => handleClick("Second Button pressed")}>
        Second
      </button>
    </>
  );
};

export default UseStateCode;
