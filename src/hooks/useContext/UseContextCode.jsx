//resolves prop drilling

import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

const UseContextCode = () => {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <p className="h3">{`Hello ${user}!`}</p>
      <Component2 />
    </UserContext.Provider>
  );
};

function Component2() {
  return (
    <>
      <p className="h3">Component 2</p>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <p className="h3">Component 3</p>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <p className="h3">Component 4</p>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <p className="h3">Component 5</p>
      <p className="h4">{`Hello ${user} again!`}</p>
    </>
  );
}

export default UseContextCode;
