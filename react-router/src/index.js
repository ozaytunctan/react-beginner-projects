import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Users from "./components/Users";
import Home from "./components/Home";
import UserEdit from "./components/Users/UserEdit/UserEdit";
import Error404 from "./components/error404/Error404";

const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            children: [
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/users",
                    element: <Users/>
                },
                {
                    path: "/users/:id",
                    element: <UserEdit/>
                }
            ]
        },
        {
            path: '/auth',
            element: (
                <div>
                    Auth Module
                    <div>
                        <Outlet/>
                    </div>
                </div>
            ),
            children: [
                {
                    path: 'login',
                    element: (
                        <div>
                            Login Page
                        </div>
                    )
                }
            ]
        },
        // Sayfa Bulunmadı
        {
            path: '*',
            element: <Error404/>
        }
    ]
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={routes}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
