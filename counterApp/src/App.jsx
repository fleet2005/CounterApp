import {useState} from "react" 
import './index.css'

const Counter = () => {

    const[value, setValue] = useState(0);
    
    function increment() {
      setValue(value+1);
    }

    function decrement() {
      setValue(value-1);
    }

    return (
      <>
          <button onClick={increment} className="button" id="one"> increment </button>
          <div>{value}</div>
          <button onClick={decrement} className="button" id="two"> decrement </button>
      </>
    )
}

export default Counter;

