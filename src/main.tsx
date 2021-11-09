import "virtual:windi.css";
import "@fontsource/jetbrains-mono";
import { render } from "preact";
import { App } from "./app";

const root = document.querySelector("#app");
if (root) render(<App />, root);
else console.error("No root element found");
