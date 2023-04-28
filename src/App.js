import logo from './logo.svg';
import { useState,createContext } from 'react';
import './App.css';
import Com_f from './components/com_f.jsx';
import Context_one from './components/context_one';
import { useReducer } from 'react';

export const userAuth = createContext()

function App() {
const [username,setUsername] = useState('');
const [lastname,setLastname] = useState('');

  return (
    <div className="App">
   <div>
      <h1>Hi There ...is a props example...{username}</h1>
      <Com_f username={username} setUsername={setUsername} />
    </div>

    <div>
    <h1>Hi There ...is a Context Api example...{lastname}</h1>
      <userAuth.Provider value={{lastname,setLastname}}>
    
        <Context_one />
      </userAuth.Provider>
    </div>
    
  </div>
  );
}

export default App;
