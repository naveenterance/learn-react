import React, { useState } from "react";

//Parent Component
const PassToChild = () => {
  const [message, setMessage] = useState("Hello from Parent!");

  return (
    <div>
      <ChildComponent message={message} setMessage={setMessage} />
    </div>
  );
};

//Child Component
const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.message}</p>

      <button onClick={() => props.setMessage("Updated message from Child!")}>
        Update Parent Message
      </button>
    </div>
  );
};

export default PassToChild;
