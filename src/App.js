import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Tokyo" />
      <footer>
        This project was coded by Jordyn Pilcher and is {""}
        <a
          href="https://github.com/jordynnnnnnn/react-weather-app"
          target="_blank"
        >
          open-sourced in Github
        </a>
      </footer>
      </div>
    </div>
  );
}
