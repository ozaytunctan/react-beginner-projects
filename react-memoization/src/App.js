import './App.css';
import {useMemo, useState, useCallback} from "react";
import Header from './components/Header';

function App() {

    // console.log("App component cerated.")

    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');

    // const data = {
    //     fullName: "Özay TUNÇTAN"
    // }


    // const data = useMemo(() => {
    //     return {fullName: "Özay TUNÇTAN"}
    // }, []);


    // const increment=()=>setCounter(counter+1);

    //counter her değiştiğinde yeiden tekrar render eder.
    const increment = useCallback(() => {
        setCounter((prevState) => prevState + 1);
    }, []);


    //counter değeri her değiştiğinde Header componenti yeniden render olacaktır. render olmasını istemiyorsak func önceki state al
    const data = useMemo(() => {
        return createData(counter);
    }, [counter]);

    return (
        <div className="App">
            <Header increment={increment}/>
            <hr/>

            <h1>{counter}</h1>
            {/*<button onClick={() => setCounter(counter + 1)}>Click</button>*/}

            <input value={message}
                   onChange={({target}) => setMessage(target.value)}/>
        </div>
    );
}

const createData = (c) => {
    return {fullName: "Özay TUNÇTAN", counter: c};
}


export default App;
