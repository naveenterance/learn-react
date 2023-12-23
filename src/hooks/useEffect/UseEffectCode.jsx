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
      <p className="h3">{displaydata}</p>
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

export default UseEffectCode;
