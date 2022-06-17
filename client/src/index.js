import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css"
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

 ReactDom.render(
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App/>
      </StateProvider>
    </React.StrictMode>, document.getElementById("root"));


