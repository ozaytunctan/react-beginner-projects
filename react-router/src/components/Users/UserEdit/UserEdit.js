import {Link, useMatch, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function UserEdit() {
    //get path param
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        //get user details by id
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setUser(response.data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));

    }, [id]);

    return (<div>
        <h2>User Detail</h2>
        <div>
            <div>
                {loading ? <span>Loading...</span>
                    : <code>{JSON.stringify(user)}
                    </code>
                }
                <br/>
                <br/>
                <Link to={`/users/${parseInt(id) + 1}`}>Next User({parseInt(id) + 1})</Link>
            </div>
        </div>
    </div>)
}

export default UserEdit;