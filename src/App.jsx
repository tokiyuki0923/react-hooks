import './App.css';
import { useState, useContext} from 'react';
import Pikachu from './main';

function App() {
  const[count, setCount] =useState(0);
  const poke = useContext(Pikachu);

  const handleClick =()=>{
    setCount(count +1);
  }
  return (
    <div className="App">
      <h1>useState</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
      <hr />
      <h1>useContext</h1>
      <p>{poke.name}</p>
      <p>{poke.age}</p>
    </div>
  )
}

export default App

