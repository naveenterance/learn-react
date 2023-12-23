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
import PropsCode from "./concepts/props/PropsCode";

import Sitemap from "./Sitemap";

function App() {
  const [view, setView] = useState("Events");

  return (
    <>
      {!view && <Sitemap />}
      {view == "Props" && (
        <div
          className="w-screen h-screen justify-center items-center flex "
          data-theme="light"
        >
          <div class="grid grid-cols-2 mx-2 ">
            <div className="mt-16">
              <img src="./Props.png" />
            </div>
            <div className="m-auto">
              <PropsCode />
            </div>
          </div>
        </div>
      )}
      {view == "Reconciliation" && (
        <div
          className="w-screen h-screen justify-center items-center flex "
          data-theme="light"
        >
          <div class="grid grid-cols-2 mx-2 ">
            <div className="mt-16">
              <img src="./Reconciliation.png" />
            </div>
            <div className="m-auto">
              <Reconciliation />
            </div>
          </div>
        </div>
      )}
      {view == "ShadowDom" && (
        <div
          className="w-screen h-screen justify-center items-center flex "
          data-theme="light"
        >
          <div class="grid grid-cols-2  mx-2 ">
            <div className="mt-auto">
              <img src="./ShadowDom.png" />
            </div>
            <div className="m-auto">
              <ShadowDom />
            </div>
          </div>
        </div>
      )}
      {view == "MemoCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2 overflow-scroll  ">
            <div className="">
              <img src="./MemoCode.png" />
              <img src="./TodoMemo.png" />
            </div>
            <div className="my-36">
              <MemoCode />
            </div>
          </div>
        </div>
      )}
      {view == "Events" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2 overflow-scroll  ">
            <div className="">
              <img src="./Events.png" />
            </div>
            <div className="my-36">
              <Events />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
