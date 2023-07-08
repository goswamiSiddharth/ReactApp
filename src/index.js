import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM.render(
//     <h1>hello world!</h1>,
//     document.getElementById("root")
// )

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)