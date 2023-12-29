/* eslint-disable react/no-deprecated */
/* eslint-disable no-unused-vars */
import * as React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { SVG, Footer } from "./Footer";

ReactDOM.hydrate(<Header />, document.getElementById("header"));
ReactDOM.hydrate(<SVG />, document.getElementById("header"));
ReactDOM.hydrate(<Footer />, document.getElementById("header"));