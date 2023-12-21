import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import UseStateCode from "./hooks/useState/UseStateCode";
import UseEffectCode from "./hooks/useEffect/UseEffectCode";
import UseRefCode from "./hooks/useRef/UseRefCode";
import MemoCode from "./components/memo/MemoCode";

function App() {
  return (
    <div
      className="w-screen justify-center items-center flex mt-12"
      data-theme="light"
    >
      <div className="w-56">
        <MemoCode />
      </div>
    </div>
  );
}

export default App;
