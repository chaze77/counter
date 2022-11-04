
import { useState } from 'react';
import './App.css';




function App() {
const [counter, setCounter] = useState(0)


const decrement = () => {
   setCounter(counter-1)
}

const increment = () => {
  setCounter(counter+1)
}

const reset = () => {
  setCounter(0)
}


  return (
    <div className="App">
    <h1>Counter</h1>
    <span className={counter>=1 ? "increase" : "decrease"}>{counter}</span>
    <div className='btns'>
    <button onClick={decrement}>DEACREASE</button>
    <button onClick={reset}>RESET</button>
    <button onClick={increment}>INCREASE</button>
    </div>
   
    </div>
  );
}

export default App;
