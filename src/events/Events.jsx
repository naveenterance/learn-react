// onmouseover : The mouse is moved over an element
// onmouseup : The mouse button is released
// onmouseout : The mouse is moved off an element
// onmousemove: The mouse is moved
// Onmousedown: mouse button is pressed
// onload : A image is done loading
// onunload: Exiting the page
// blur : Losing Focus on the element
// onchange : Content of a field changes
// onclick: Clicking an object
// ondblclick: double clicking an object
// onfocus: element getting a focus
// Onkeydown: pushing a keyboard key
// Onkeyup: keyboard key is released
// Onkeypress: keyboard key is pressed
// Onselect: the text is selected

import React, { useState } from "react";

const Events = () => {
  const [value, setValue] = useState("Initial state");

  const handleOnMouseOver = () => {
    setValue("onmouseover");
  };

  const handleOnMouseUp = () => {
    setValue("onmouseup");
  };

  const handleOnMouseOut = () => {
    setValue("onmouseout");
  };

  const handleOnMouseMove = () => {
    setValue("onmousemove");
  };

  const handleOnMouseDown = () => {
    setValue("Onmousedown");
  };

  const handleOnLoad = () => {
    setValue("onload");
  };

  const handleOnUnload = () => {
    setValue("onunload");
  };

  const handleOnBlur = () => {
    setValue("onblur");
  };

  const handleOnKeyDown = () => {
    setValue("Onkeydown");
  };

  const handleOnKeyUp = () => {
    setValue("Onkeyup");
  };

  const handleOnKeyPress = () => {
    setValue("Onkeypress");
  };

  const handleOnSelect = () => {
    setValue("Onselect");
  };

  const handleOnChange = () => {
    setValue("OnChange");
  };

  const handleOnClick = () => {
    setValue("OnClick");
  };

  const handleOnDoubleClick = () => {
    setValue("OnDoubleClick");
  };

  const handleOnFocus = () => {
    setValue("OnFocus");
  };

  const handleOnSubmit = () => {
    setValue("OnSubmit");
  };

  return (
    <>
      <p className="h3">Value: {value}</p>

      <div className="flex-col p-16">
        <button className="btn" onMouseOver={handleOnMouseOver}>
          onmouseover
        </button>
        <button className="btn" onMouseUp={handleOnMouseUp}>
          onmouseup
        </button>
        <button className="btn" onMouseOut={handleOnMouseOut}>
          onmouseout
        </button>
        <button className="btn" onMouseMove={handleOnMouseMove}>
          onmousemove
        </button>
        <button className="btn" onMouseDown={handleOnMouseDown}>
          Onmousedown
        </button>
        <button className="btn" onLoad={handleOnLoad}>
          onload
        </button>
        <button className="btn" onUnload={handleOnUnload}>
          onunload
        </button>
        <button className="btn" onBlur={handleOnBlur}>
          onblur
        </button>
        <button className="btn" onKeyDown={handleOnKeyDown}>
          Onkeydown
        </button>
        <button className="btn" onKeyUp={handleOnKeyUp}>
          Onkeyup
        </button>
        <button className="btn" onKeyPress={handleOnKeyPress}>
          Onkeypress
        </button>
        <button className="btn" onSelect={handleOnSelect}>
          Onselect
        </button>
        <button className="btn" onChange={handleOnChange}>
          OnChange
        </button>
        <button className="btn" onClick={handleOnClick}>
          OnClick
        </button>
        <button className="btn" onDoubleClick={handleOnDoubleClick}>
          OnDoubleClick
        </button>
        <button className="btn" onFocus={handleOnFocus}>
          OnFocus
        </button>
        <button className="btn" onSubmit={handleOnSubmit}>
          OnSubmit
        </button>
      </div>
    </>
  );
};

export default Events;
