import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";

function App() {

    //
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div className="App">
            {
                isVisible && <Counter/>
            }
            <hr/>
            <button onClick={() => setIsVisible(!isVisible)}>
                Counter Toggle
            </button>
        </div>
    )
}

export default App;
