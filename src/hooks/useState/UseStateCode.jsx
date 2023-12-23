import React, { useState } from "react";

const UseStateCode = () => {
  const [data, setData] = useState("Initial value");

  const handleClick = (value) => {
    setData(value);
  };

  return (
    <>
      <p className="h3">{data}</p>
      <button
        onClick={() => handleClick("First Button pressed")}
        className="btn"
      >
        First
      </button>

      <button
        onClick={() => handleClick("Second Button pressed")}
        className="btn"
      >
        Second
      </button>
    </>
  );
};

export default UseStateCode;
