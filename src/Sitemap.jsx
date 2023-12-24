import React, { useState } from "react";
import "animate.css";

const Sitemap = ({ isExpanded, receiveView }) => {
  const [active, setActive] = useState();
  const handleInputChange = (data) => {
    receiveView(data);
    setActive(data);
  };

  return (
    <div
      className={`rounded-lg fixed bottom-0 left-0 right-0 bg-slate-100 shadow-lg animate__animated${
        isExpanded ? " animate__fadeInUp" : " animate__fadeOutDown "
      }`}
    >
      <figure>
        <ul class="tree">
          <li>
            <code
              className={` ${!active ? "bd3" : "bd2"}`}
              onClick={() => handleInputChange()}
            >
              React{" "}
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/office/40/react.png"
                alt="react"
              />
            </code>
            <ul>
              <li>
                <code className="bd2">
                  Concepts
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/concept.png"
                    alt="concept"
                  />
                </code>
                <ul>
                  <li>
                    <code
                      className={` ${active === "Props" ? "bd3" : "bd2"}`}
                      onClick={() => handleInputChange("Props")}
                    >
                      Props
                    </code>
                  </li>
                  <li>
                    <code
                      className={` ${
                        active === "Reconciliation" ? "bd3" : "bd2"
                      }`}
                      onClick={() => handleInputChange("Reconciliation")}
                    >
                      Reconciliation
                    </code>
                  </li>
                  <li>
                    <code
                      className={` ${active === "ShadowDom" ? "bd3" : "bd2"}`}
                      onClick={() => handleInputChange("ShadowDom")}
                    >
                      Shadow DOM
                    </code>
                  </li>
                </ul>
              </li>
              <li>
                <code className="bd2 flex">
                  Hooks
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/emoji/48/hook.png"
                    alt="hook"
                  />
                </code>
                <ul>
                  <li>
                    <code className="bd2">
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/windows/32/circled-chevron-down.png"
                        alt="circled-chevron-down"
                      />
                    </code>
                    <ul>
                      <li>
                        <code className="bd2">
                          <img
                            width="32"
                            height="32"
                            src="https://img.icons8.com/windows/32/circled-chevron-down.png"
                            alt="circled-chevron-down"
                          />
                        </code>
                        <ul>
                          <li>
                            <code
                              className={` ${
                                active === "UseStateCode" ? "bd3" : "bd2"
                              }`}
                              onClick={() => handleInputChange("UseStateCode")}
                            >
                              useState
                            </code>
                          </li>
                          <li>
                            <code
                              className={` ${
                                active === "UseEffectCode" ? "bd3" : "bd2"
                              }`}
                              onClick={() => handleInputChange("UseEffectCode")}
                            >
                              useEffect
                            </code>
                          </li>
                          <li>
                            <code
                              className={` ${
                                active === "UseContextCode" ? "bd3" : "bd2"
                              }`}
                              onClick={() =>
                                handleInputChange("UseContextCode")
                              }
                            >
                              useContext
                            </code>
                          </li>
                          <li>
                            <code
                              className={` ${
                                active === "UseRefCode" ? "bd3" : "bd2"
                              }`}
                              onClick={() => handleInputChange("UseRefCode")}
                            >
                              useRef
                            </code>
                          </li>
                          <li>
                            <code
                              className={` ${
                                active === "UseCallbackCode" ? "bd3" : "bd2"
                              }`}
                              onClick={() =>
                                handleInputChange("UseCallbackCode")
                              }
                            >
                              useCallback
                            </code>
                          </li>
                          <li>
                            <code
                              className={` ${
                                active === "UseMemoCode" ? "bd3" : "bd2"
                              }`}
                              onClick={() => handleInputChange("UseMemoCode")}
                            >
                              useMemo
                            </code>
                          </li>
                          <li>
                            <code
                              className={` ${
                                active === "UseReducerCode" ? "bd3" : "bd2"
                              }`}
                              onClick={() =>
                                handleInputChange("UseReducerCode")
                              }
                            >
                              useReducer
                            </code>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <code className="bd2">
                  Components{" "}
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/external-outline-black-m-oki-orlando/64/12B886/external-components-supply-chain-management-outline-outline-black-m-oki-orlando.png"
                    alt="external-components-supply-chain-management-outline-outline-black-m-oki-orlando"
                  />
                </code>
                <ul>
                  <li>
                    <code className="bd2">
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/windows/32/circled-chevron-down.png"
                        alt="circled-chevron-down"
                      />
                    </code>
                    <ul>
                      <li>
                        <code
                          className={` ${
                            active === "MemoCode" ? "bd3" : "bd2"
                          }`}
                          onClick={() => handleInputChange("MemoCode")}
                        >
                          Memo
                        </code>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <code className="bd2">
                  Libraries
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/books.png"
                    alt="books"
                  />
                </code>
                <ul>
                  <code className="bd2">
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/windows/32/circled-chevron-down.png"
                      alt="circled-chevron-down"
                    />
                  </code>
                </ul>
                <ul>
                  <code className="bd2">
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/windows/32/circled-chevron-down.png"
                      alt="circled-chevron-down"
                    />
                  </code>
                </ul>
                <ul>
                  <code className="bd2">
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/windows/32/circled-chevron-down.png"
                      alt="circled-chevron-down"
                    />
                  </code>
                </ul>
                <ul>
                  <li>
                    <code
                      className={` ${active === "ReactQuery" ? "bd3" : "bd2"}`}
                      onClick={() => handleInputChange("ReactQuery")}
                    >
                      React Query
                    </code>
                  </li>
                  <li>
                    <code
                      className={` ${active === "ReactRouter" ? "bd3" : "bd2"}`}
                      onClick={() => handleInputChange("ReactRouter")}
                    >
                      React Router
                    </code>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </figure>
    </div>
  );
};

export default Sitemap;
