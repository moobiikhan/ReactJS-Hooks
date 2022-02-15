import React, {Text,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const[count,setCount] = useState(0);

  const increment =()=>{
    setCount(count+1)
  }

  const decrement = ()=>{
    setCount(count-1)
  }

  return (
    
    <div>
      <h1>This is useState: </h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <span>{count}</span>
    </div>
  
  );


}

export default App;
