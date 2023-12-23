import React, { useState } from "react";
import "animate.css";

const Sitemap = ({ isExpanded }) => {
  return (
    <div
      className={`rounded-lg fixed bottom-0 left-0 right-0 bg-slate-100 shadow-lg animate__animated${
        isExpanded ? " animate__fadeInUp" : " animate__fadeOutDown "
      }`}
    >
      <figure>
        <ul class="tree">
          <li>
            <code>React</code>
            <ul>
              <li>
                <code>Concepts</code>
                <ul>
                  <li>
                    <code>Props</code>
                  </li>
                  <li>
                    <code>Reconciliation</code>
                  </li>
                  <li>
                    <code>Shadow DOM</code>
                  </li>
                </ul>
              </li>
              <li>
                <code>Hooks</code>
                <ul>
                  <li>
                    <code>-</code>
                    <ul>
                      <li>
                        <code>-</code>
                        <ul>
                          <li>
                            <code>useState</code>
                          </li>
                          <li>
                            <code>useEffect</code>
                          </li>
                          <li>
                            <code>useContext</code>
                          </li>
                          <li>
                            <code>useRef</code>
                          </li>
                          <li>
                            <code>useCallback</code>
                          </li>
                          <li>
                            <code>useMemo</code>
                          </li>
                          <li>
                            <code>useReducer</code>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <code>Components</code>
                <ul>
                  <li>
                    <code>-</code>
                    <ul>
                      <li>
                        <code>Memo</code>
                      </li>
                    </ul>
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
