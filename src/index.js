import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   React.createElement("h1", null, "Hello React!")
// )

// root.render(
//   React.createElement(
//     "div",
//     {title: "Doggy"},
//     React.createElement("h1", null, "Hey!"),
//     React.createElement("p", null, "It is Magic!")
//   )
// )

root.render(
  <div title="Doggy">
    <h1>Hello</h1>
    <hr/> 
    <h2>
      <mark>React</mark>
    </h2>
  </div>
)