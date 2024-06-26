import React from "react";
import ReactDOM from "react-dom/client";

// const name = "Your name";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <h4>Browser's details: {navigator.userAgent}</h4>
);
