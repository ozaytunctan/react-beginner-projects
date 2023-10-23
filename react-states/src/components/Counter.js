import {useEffect, useState} from "react";
import "./Counter.css";

function Counter() {
    //durum tanımlamak için
    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("component mount edildi.");

        const interval = setInterval(() => {
            setCount((c) => c + 1);
        }, 1000);
        //component ondestroyed close subcriptions
        return () => {
            clearInterval(interval);
        }
    }, []);


    //count stateti takip etmek için
    useEffect(() => {
        console.log("count state güncellendi.")
    }, [count]);

    return (
        <div className="Counter">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Saydır
            </button>
        </div>
    )
}

export default Counter;