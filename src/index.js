import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.scss";
import Stars from "./components/ExampleStars";

const mountNode = document.getElementById("app");
ReactDOM.render(
  <App apiIP={"http://3.21.164.220"} productId={1} stars={<Stars />} />,
  mountNode
);
