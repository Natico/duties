import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.min.css";
import ToDOList from "./components/ToDolist";

var destination = document.querySelector("#root");

ReactDOM.render(
  <div>
    <ToDOList />
  </div>,
  destination
);
