import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
// import KontentDelivery from "./components/kontentAi/KontentDelivery.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        {/* <KontentDelivery> */}
        <App />
        {/* </KontentDelivery> */}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
