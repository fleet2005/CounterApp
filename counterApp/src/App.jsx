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
      <div className = "container">
          <div id="value" className="topRow" style={{fontWeight : "bold", fontSize : "4vw"}}>{value}</div>
          <div className = "bottomRow">
            <button onClick={increment} className="button" id="one"> Increment </button>
            <button onClick={decrement} className="button" id="two"> Decrement </button>
          </div>
      </div>
    )
}

export default Counter;

