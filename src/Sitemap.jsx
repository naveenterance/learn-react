import React, { useState } from "react";

const Sitemap = () => {
  return (
    <div>
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
