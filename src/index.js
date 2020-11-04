import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.scss";

const mountNode = document.getElementById("app");
ReactDOM.render(<App apiIP={"http://3.21.164.220"} productId={2} />, mountNode);
