import React from "react";
import "./App.css";
import Header from '../src/components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
