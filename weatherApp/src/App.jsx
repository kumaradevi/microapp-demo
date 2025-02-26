import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import WeatherApp from "./components/WeatherApp";

const App = () => (
  <div >
    <WeatherApp/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)