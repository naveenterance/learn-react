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
      <p>Value: {value}</p>

      <div className="flex-col p-16">
        <button onMouseOver={handleOnMouseOver}>onmouseover</button>
        <button onMouseUp={handleOnMouseUp}>onmouseup</button>
        <button onMouseOut={handleOnMouseOut}>onmouseout</button>
        <button onMouseMove={handleOnMouseMove}>onmousemove</button>
        <button onMouseDown={handleOnMouseDown}>Onmousedown</button>
        <button onLoad={handleOnLoad}>onload</button>
        <button onUnload={handleOnUnload}>onunload</button>
        <button onBlur={handleOnBlur}>onblur</button>
        <button onKeyDown={handleOnKeyDown}>Onkeydown</button>
        <button onKeyUp={handleOnKeyUp}>Onkeyup</button>
        <button onKeyPress={handleOnKeyPress}>Onkeypress</button>
        <button onSelect={handleOnSelect}>Onselect</button>
        <button onChange={handleOnChange}>OnChange</button>
        <button onClick={handleOnClick}>OnClick</button>
        <button onDoubleClick={handleOnDoubleClick}>OnDoubleClick</button>
        <button onFocus={handleOnFocus}>OnFocus</button>
        <button onSubmit={handleOnSubmit}>OnSubmit</button>
      </div>
    </>
  );
};

export default Events;
