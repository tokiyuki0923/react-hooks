import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const poke = {
  name:"pikachu",
  age:25,
}

const Pikachu = createContext(poke);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Pikachu.Provider value={poke}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Pikachu.Provider>
)

export default Pikachu;