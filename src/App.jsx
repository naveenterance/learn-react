import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import UseStateCode from "./hooks/useState/UseStateCode";
import UseEffectCode from "./hooks/useEffect/UseEffectCode";
import UseRefCode from "./hooks/useRef/UseRefCode";
import MemoCode from "./components/memo/MemoCode";
import UseCallbackCode from "./hooks/useCallback/UseCallbackCode";
import UseMemoCode from "./hooks/useMemo/UseMemoCode";
import UseContextCode from "./hooks/useContext/UseContextCode";
import UseReducerCode from "./hooks/useReducer/UseReducerCode";
import Events from "./events/Events";
import ShadowDom from "./concepts/shadow-dom/ShadowDom";
import Reconciliation from "./concepts/reconciliation/Reconciliation";
import PassToChild from "./concepts/props/PassToChild";
import PassToParent from "./concepts/props/PassToParent";

function App() {
  return (
    <div
      className="w-screen justify-center items-center flex mt-12"
      data-theme="light"
    >
      <div className="w-56">
        <PassToChild />
        <PassToParent />
      </div>
    </div>
  );
}

export default App;
