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
import ReactQuery from "./libraries/react-query/ReactQuery";
import ReactRouter from "./libraries/react-router/ReactRouter";

import Sitemap from "./Sitemap";

function App() {
  const [view, setView] = useState();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  const receiveView = (data) => {
    setView(data);
  };

  return (
    <>
      {!view && (
        <img
          className="h-32"
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXIxbWtya2liMWZ6Z3ZrbDB1djAyMXl6ZjVpd3ZrdjloM3dseTM2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hUL5gdlvDgtRbOElZS/giphy.gif"
        />
      )}
      <button
        onClick={toggleSidebar}
        className="fixed bottom-4 left-4  p-2 rounded-full z-50 shadow-lg shadow-violet-900 bg-slate-200"
      >
        {isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-red-400"
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
            className="w-12 h-12 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
      </button>
      <Sitemap isExpanded={isExpanded} receiveView={receiveView} />
      {view == "Props" && (
        <div className="w-screen h-screen   ">
          <div class="grid grid-cols-2 mx-2 ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./Props.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <PropsCode />
            </div>
          </div>
        </div>
      )}
      {view == "Reconciliation" && (
        <div className="w-screen h-screen  " data-theme="light">
          <div class="grid grid-cols-2 mx-2 ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./Reconciliation.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <Reconciliation />
            </div>
          </div>
        </div>
      )}
      {view == "ShadowDom" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2 ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./ShadowDom.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <ShadowDom />
            </div>
          </div>
        </div>
      )}
      {view == "MemoCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./MemoCode.png" />
              <img src="./TodoMemo.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <MemoCode />
            </div>
          </div>
        </div>
      )}
      {view == "Events" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./Events.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <Events />
            </div>
          </div>
        </div>
      )}
      {view == "UseStateCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./UseStateCode.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <UseStateCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseEffectCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./UseEffectCode.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <UseEffectCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseRefCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./UseRefCode.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <UseRefCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseContextCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./UseContextCode.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <UseContextCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseMemoCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./UseMemoCode.png" />
              <img src="./TodoUseMemo.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <UseMemoCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseCallbackCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./UseCallbackCode.png" />
              <img src="./TodoUseCallback.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <UseCallbackCode />
            </div>
          </div>
        </div>
      )}
      {view == "UseReducerCode" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./UseReducerCode.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <UseReducerCode />
            </div>
          </div>
        </div>
      )}
      {view == "ReactQuery" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./ReactQuery.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <ReactQuery />
            </div>
          </div>
        </div>
      )}
      {view == "ReactRouter" && (
        <div className="w-screen h-screen " data-theme="light">
          <div class="grid grid-cols-2  mx-2   ">
            <div className="mt-2 animate__animated animate__fadeInLeft -z-50">
              <img src="./ReactRouter.png" />
            </div>
            <div
              className={`mt-36 mr-2 animate__animated animate__fadeInRight ${
                isExpanded ? "-z-50" : ""
              }`}
            >
              <ReactRouter />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
