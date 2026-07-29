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
            rel="noopener noreferrer"
          >
            open-sourced in Github
          </a>{" "}
          and{" "}
          <a
            href="https://jordyns-react-weatherapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
