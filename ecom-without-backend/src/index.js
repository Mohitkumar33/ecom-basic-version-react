import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./contexts/filterProducts";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <App />
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
