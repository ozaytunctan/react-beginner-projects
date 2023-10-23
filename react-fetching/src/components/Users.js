import {useEffect, useState} from "react";
import axios from "axios";


function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //onload component
    useEffect(() => {

        //component yüklendikten hemen sonra veriyi çek
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(data => setUsers(data))
        //     .catch((e) => console.log(e))
        //     .finally(() => setIsLoading(false));

        //2. yöntem tercih edilen yöntem
        axios('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false))

    }, []);


    return (
        <div>
            <h1>Users</h1>
            {
                isLoading && <div>Loading...</div>
            }
            {
                users && users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
}

export default Users;