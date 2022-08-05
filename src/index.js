// System
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RootContainer from "router";
import * as serviceWorker from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

// Redux
import { store } from "./store/store";
import { Provider } from "react-redux";

// Styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <RootContainer />
    </Provider>
  </BrowserRouter>
);

// change to register() for active PWA
serviceWorker.unregister();

reportWebVitals();
