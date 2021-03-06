import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3ReactProvider } from "@web3-react/core";
import { getProvider } from "./components/utils/provider";
import { HashRouter } from "react-router-dom";

ReactDOM.render(

          <HashRouter >
  <Web3ReactProvider getLibrary={getProvider}>
    <App />
  </Web3ReactProvider>
          </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
