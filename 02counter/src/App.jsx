import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5;
  
  
  let [counter,setCounter]=useState(5);        //useState is a hook 
  const addValue = () => {                    //hence react holds UI 
    if(counter<1){
    alert("Counter cannot be negative"); 
    }else{
      setCounter(counter + 1);
    }
    console.log("value added: ",counter);
  }


  const removeValue=()=>{
    if(counter<1){
    alert("Counter cannot be negative"); 
    }else{
      setCounter(counter - 1);
    }
    console.log("value removed: ",counter);
  }
  return (
    <>
      <h1>Chaii aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
