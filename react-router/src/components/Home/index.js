import {Link, NavLink, Outlet} from "react-router-dom";
import React from "react";

function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                                 style={({isActive}) => {
                                     return {
                                         color: isActive ? "orange" : "",
                                     }
                                 }}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>

                    <li>
                        <Link to="/auth/login">Login</Link>
                    </li>
                </ul>
            </nav>

            <div className="main">
                <Outlet/>
            </div>
        </div>


    )
}

export default Home;