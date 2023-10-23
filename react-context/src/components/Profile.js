import {useState} from "react";
import {useLoggedInUser} from "../context/UserContext";


function Profile() {

    const {user, setUser} = useLoggedInUser();

    const [loading, setLoading] = useState(false);

    const handleLogin = () => {

        setLoading(true);

        setTimeout(() => {
            setUser({
                id: 1,
                username: 'otunctan',
                bio: 'lorem lorem ipum doler'
            });
            setLoading(false);
        }, 1500);

    };

    const handleLogout = () => {
        setUser(null);
    }


    return (
        <div>
            {
                !user && <button onClick={handleLogin}>{loading ? 'Loading...' : "Login"}</button>
            }
            <br/>
            <code>{
                JSON.stringify(user)
            }</code>

            <br/>
            {
                user && <button onClick={handleLogout}>Logout</button>
            }

        </div>
    )
}


export default Profile;