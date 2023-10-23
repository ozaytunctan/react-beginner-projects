import {useEffect, useState} from "react";
import axios from "axios";
import {Link, Route, useRouteMatch} from "react-router-dom";

const defaultUsers = [
    {
        id: 1,
        name: 'Ozay tunçtan'
    },
    {
        id: 2,
        name: 'Ali Can'
    },
    {
        id: 3,
        name: 'Yağmur tunçtan'
    }
]

function Users() {

    const [users, setUsers] = useState([defaultUsers]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        //load users
        axios('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));

    }, []);


    return (
        <div>
            <h1>Users </h1>
            <ul>
                {
                    loading && <span>Loading...</span>
                }
                {
                    users.map(user => (
                            <li key={user.id}>
                                <Link to={`/users/${user.id}`}>{user.name}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default Users;