import React, { useState } from "react";

//Parent Component
const PropsCode = () => {
  const [message, setMessage] = useState(123);

  return (
    <div className="bd">
      <p className="h3">Parent component </p>
      <div>
        <p className="h4">Value at parent : {message}</p>
        <ChildComponent message={message} setMessage={setMessage} />
      </div>
    </div>
  );
};

//Child Component
const ChildComponent = (props) => {
  return (
    <div className="bd m-4">
      <p className="h3">Child Component</p>
      <p className="h4">Value from parent: {props.message}</p>

      <button className="btn" onClick={() => props.setMessage(456)}>
        pass Value = 456 from child to parent
      </button>
    </div>
  );
};

export default PropsCode;
