import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => console.log(err.message));

    
  };
  

  return (
    <div className="main-div">
      <h1>Random Qutoe Generator </h1>
      <button onClick={() => generateQuote()} className="generate-button">
        Generate Random Qutoe
      </button>
      <div className="qutoe-div">
        <h1 className="quote"> " {quote.content} " </h1>
      </div>
    </div>
  );
}

export default App;
