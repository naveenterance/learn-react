//  You can store information between re-renders
// Changing it does not trigger a re-render
// The information is local to each copy of your component

import React, { useRef, useState, useEffect } from "react";

const UseRefCode = () => {
  const data = useRef(0);
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  const handleClick = () => {
    data.current += 1;
    alert("You incremented useRef the value to :" + data.current);
  };

  useEffect(() => {
    renderCount.current += 1;
  }); //only increment with changes in rerender counter ,but re-render twice due to useffect

  return (
    <>
      <p>Render count: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Trigger Re-render</button>
      <button onClick={handleClick}>Increment useRef object</button>

      <p>useRef object count :{data.current}</p>
    </>
  );
};

export default UseRefCode;
