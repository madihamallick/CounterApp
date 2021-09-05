import './App.css';
import Up from './asset/up.png'
import Down from './asset/down.png'
import { useState } from 'react';

function App() {
  const [c, setValue] = useState(0);
  return (
    <div className="app">
      <h1 style={{margin:"4rem"}}>COUNTER APP</h1>
      <div className="counter">
        <h1 className="count">{c}</h1>
      </div>
      <div className="wrapper">
        <img className="btn" onClick={(e) => {
          setValue(c + 1)
        }} src={Up} width="100" height="100" alt=".." />


        <button className="btn__reset" onClick={(e) => {
          setValue(0)
        }}>
          <h3>RESET</h3>
        </button>

        <img className="btn" onClick={(e) => {
          setValue(c - 1)
        }} src={Down} width="100" height="100" alt="..." />
      </div>
    </div>
  );
}

export default App;
