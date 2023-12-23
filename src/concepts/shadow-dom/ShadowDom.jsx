//It adds a subtree of DOM elements into the rendering of a document, instead of adding it to the main document’s DOM tree.
//In React, you typically don't need to manually create shadow DOM, as the framework handles the rendering and encapsulation.
import React from "react";

const ShadowDomExample = () => {
  return (
    <div className="text-red-300  bd">
      <div className="h3">Outer React Component</div>
      <div className="text-green-300 bd">
        <div className="h3">Shadow DOM Component</div>
        <p className="h4">Encapsulated content with its own styles.</p>
      </div>
    </div>
  );
};

export default ShadowDomExample;
