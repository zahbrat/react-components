import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; 

const root = createRoot((document.getElementById("root")));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Я його поставив у форматі JSX бо мій бандлер буде сваритися якщо ванільний JS буде мати JSX синтаксис