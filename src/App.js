import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Bruce Wayne");

  function handleClick() {
    setName("Tony Start");
    console.log(name);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hi, I'm {name}. I work at MTS</p>
        <button onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
