import React, { useEffect, useState } from "react";

const UseEffectCode = () => {
  const [data, setData] = useState("Initial value");
  const [displaydata, setdisplaydata] = useState();

  const handleClick = (value) => {
    setData(value);
  };
  useEffect(() => {
    setdisplaydata(data);
  }, [data]);

  return (
    <>
      <button onClick={() => handleClick("First Button pressed")}>First</button>
      <button>{displaydata}</button>
      <button onClick={() => handleClick("Second Button pressed")}>
        Second
      </button>
    </>
  );
};

export default UseEffectCode;
