// When you click the "Update List" button,
// React goes through the reconciliation process to efficiently update the DOM.
// It identifies the differences between the previous and current virtual DOM representations and updates only the necessary parts of the actual DOM.

import React, { useState } from "react";

const ListComponent = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

const Reconciliation = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);

  const handleUpdate = () => {
    setItems([
      { id: 1, text: "Item 1" },
      { id: 2, text: "Updated Item 2" },
      { id: 3, text: "Item 3" },
      { id: 4, text: "New Item 4" },
    ]);
  };

  return (
    <div>
      <h2>React Reconciliation Example</h2>
      <ListComponent items={items} />
      <button onClick={handleUpdate}>Update List</button>
    </div>
  );
};

export default Reconciliation;
