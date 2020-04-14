import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.API_KEY)
ReactDOM.render(<App />, document.getElementById("root"));
