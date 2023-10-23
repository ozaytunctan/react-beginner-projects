import './App.css';
import React from "react";
import User from "./app/components/User";


const friends = [
    {
        name: "Ahmet",
        id: 1
    },
    {
        name: "ozay",
        id: 2
    },
    {
        name: "ali",
        id: 3
    }
]

function App() {
    return (
        <>
            <User
                age={"30"}
                name="Özay"
                surname="TUNÇTAN"
                isLoggedIn={true}
                address={
                    {
                        title: 'Kızılay/Ankara',
                        zipCode: "0006"
                    }
                }
                friends={friends}/>
        </>
    );
}

export default App;
