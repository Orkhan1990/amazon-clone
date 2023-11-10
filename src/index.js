import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StateProvider from "./contextApi/state/StateProvider.js";
import reducer, { initialState } from "./contextApi/reducer/reducer.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);
