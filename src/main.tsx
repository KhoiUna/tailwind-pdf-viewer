import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
