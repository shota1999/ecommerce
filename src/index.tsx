import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { Provider } from "react-redux";
import { ReduxStore } from "./components/Redux/ReduxStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
