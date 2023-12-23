import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "animate.css";

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
  const [view, setView] = useState("UseMemoCode");
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed bottom-4 right-4  p-2 rounded-full z-50 shadow-lg shadow-violet-900"
      >
        {isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
      </button>
      <Sitemap isExpanded={isExpanded} />
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
          <div class="grid grid-cols-2  mx-2   ">
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
          <div class="grid grid-cols-2  mx-2   ">
            <div className="">
              <img src="./Events.png" />
            </div>
            <div className="my-36">
              <Events />
            </div>
          </div>
        </div>
      )}
      {view == "UseStateCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="">
              <img src="./UseStateCode.png" />
            </div>
            <div className="my-36">
              <UseStateCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseEffectCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="">
              <img src="./UseEffectCode.png" />
            </div>
            <div className="my-36">
              <UseEffectCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseRefCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="">
              <img src="./UseRefCode.png" />
            </div>
            <div className="my-36">
              <UseRefCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseContextCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="">
              <img src="./UseContextCode.png" />
            </div>
            <div className="my-36">
              <UseContextCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseMemoCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="">
              <img src="./UseMemoCode.png" />
              <img src="./TodoUseMemo.png" />
            </div>
            <div className="my-36">
              <UseMemoCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseCallbackCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="">
              <img src="./UseCallbackCode.png" />
              <img src="./TodoUseCallback.png" />
            </div>
            <div className="my-36">
              <UseCallbackCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseReducerCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="">
              <img src="./UseReducerCode.png" />
            </div>
            <div className="my-36">
              <UseReducerCode />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
