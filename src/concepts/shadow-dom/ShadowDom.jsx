//It adds a subtree of DOM elements into the rendering of a document, instead of adding it to the main document’s DOM tree.
//In React, you typically don't need to manually create shadow DOM, as the framework handles the rendering and encapsulation.
import React from "react";

const ShadowDomExample = () => {
  return (
    <div className="text-red-300">
      <h2>Outer React Component</h2>
      <div className="text-green-300">
        <h3>Shadow DOM Component</h3>
        <p>Encapsulated content with its own styles.</p>
      </div>
    </div>
  );
};

export default ShadowDomExample;
