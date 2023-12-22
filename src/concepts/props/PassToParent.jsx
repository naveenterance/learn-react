import React, { useState } from "react";

// Child Component
const ChildComponent = ({ onValueChange }) => {
  const handleButtonClick = () => {
    const valueFromChild = "Value from Child";

    onValueChange(valueFromChild);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleButtonClick}>Send Value to Parent</button>
    </div>
  );
};

// Parent Component
const PassToParent = () => {
  const [valueFromChild, setValueFromChild] = useState(null);

  const handleValueChange = (value) => {
    setValueFromChild(value);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Value from Child: {valueFromChild}</p>
      {/* Pass the function as a prop to the child component */}
      <ChildComponent onValueChange={handleValueChange} />
    </div>
  );
};

export default PassToParent;
