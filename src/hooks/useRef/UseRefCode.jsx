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
      <p className="h3">Render count: {renderCount.current}</p>

      <button onClick={() => setCount(count + 1)} className="btn">
        Trigger Re-render
      </button>
      <button onClick={handleClick} className="btn">
        Increment useRef object
      </button>

      <p className="h3">useRef object count :{data.current}</p>
    </>
  );
};

export default UseRefCode;
