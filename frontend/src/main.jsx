import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Todo } from "./Todo.jsx";
import "./css/style.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
