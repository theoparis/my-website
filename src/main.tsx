import { render } from "preact";
import { App } from "./app";
import "./index.css";

const root = document.querySelector("#app");
if (root) render(<App />, root);
else console.error("No root element found");
