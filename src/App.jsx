import './App.css';
import { useState, useContext, useReducer, useMemo} from 'react';
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

  const [count1,setCount1]=useMemo(0);
  const [count2,setCount2]=useMemo(0);

  const square=()=>{
    let i = 0;
    while(i<2000000){
      i++;
    }
    return count2 * count2;
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
      <hr />
      <h1>useMemo</h1>
      <div>カウント1：{count1}</div>
      <div>カウント2：{count2}</div>
      <div>結果：{square()}</div>
      <button onClick={()=>setCount1(count1+1)}>＋</button>
      <button onClick={()=>setCount2(count2+1)}>＋</button>
    </div>
  )
}

export default App

