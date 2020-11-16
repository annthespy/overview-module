import React from "react";
import ReactDOM from "react-dom";
import Overview from "./components/Overview";
import "./styles.scss";

const mountNode = document.getElementById("app");
ReactDOM.render(
  <Overview apiIP={"http://3.21.164.220"} productId={1} />,
  mountNode
);
