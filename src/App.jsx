import './App.css';
import { useState, useContext, useReducer} from 'react';
import Pikachu from './main';


const reducer =(state,action) =>{
  switch(action.type){
    case "increment":
      return state +1;
    case "decrement":
      return state -1;
    default:
      return state;
  }
}

function App() {
  const[count, setCount] =useState(0);
  const poke = useContext(Pikachu);
  const [state,dispatch] = useReducer(reducer,0);


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
      <h1>useReducer</h1>
      <p>カウント:{state}</p>
      <button onClick={()=> dispatch({type:"increment"})}>＋</button>
      <button onClick={()=> dispatch({type:"decrement"})}>ー</button>
    </div>
  )
}

export default App

