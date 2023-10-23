import logo from './logo.svg';
import './App.css';
import {Field, Form, Formik, useFormik} from "formik";
import React from "react";
import Signup from "./components/Signup";

function App() {


    const handleForm = (values) => {
        console.log(values);
    };

    const {handleSubmit, values, handleChange} = useFormik({
        initialValues: {
            userName: "",
            password: "",
            gender: "male",
            hobies: [],
            country: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(values));
        }

    })


    return (
        <div className="App">
            <Signup/>
            {/*<h1>Register</h1>*/}
            {/*<form onSubmit={handleSubmit}>*/}

            {/*    <div>*/}
            {/*        <label htmlFor="userName">Username: </label>*/}
            {/*        <input id="userName"*/}
            {/*               value={values.userName}*/}
            {/*               name="userName" onChange={handleChange}></input>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <label htmlFor="password">Password: </label>*/}
            {/*        <input id="password" name="password" onChange={handleChange}></input>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <label>Gender</label>*/}

            {/*        <input type="radio"*/}
            {/*               value="male"*/}
            {/*               name="gender"*/}
            {/*               id="male"*/}
            {/*               checked={values.gender === 'male'}*/}
            {/*               onChange={handleChange}/>*/}
            {/*        <span>Male</span>*/}

            {/*        <input type="radio"*/}
            {/*               value="female"*/}
            {/*               name="gender"*/}
            {/*               id="female"*/}
            {/*               checked={values.gender === 'female'}*/}
            {/*               onChange={handleChange}/>*/}
            {/*        <span>Female</span>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <input type="checkbox"*/}
            {/*               name="hobies"*/}
            {/*               onChange={handleChange}*/}
            {/*               value="Football"/>*/}
            {/*        <span>Football</span>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <input type="checkbox"*/}
            {/*               name="hobies"*/}
            {/*               value="Cinema"*/}
            {/*               onChange={handleChange}/>*/}
            {/*        <span>Cinema</span>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <input type="checkbox"*/}
            {/*               name="hobies"*/}
            {/*               value="Photography"*/}
            {/*               onChange={handleChange}/>*/}
            {/*        <span>Photography</span>*/}
            {/*    </div>*/}

            {/*    <div>*/}

            {/*        <select name="country"*/}
            {/*                value={values.country}*/}
            {/*                onChange={handleChange}>*/}
            {/*            <option value="">Please select a country</option>*/}
            {/*            <option value="tr">Türkiye</option>*/}
            {/*            <option value="en">İngiltere</option>*/}
            {/*            <option value="usa">Amerika Birleşik Devletleri</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}

            {/*    <button type="submit">Register</button>*/}

            {/*    <br/>*/}

            {/*    {*/}
            {/*        JSON.stringify(values)*/}
            {/*    }*/}


            {/*</form>*/}


            {/*<Formik initialValues={{*/}
            {/*    userName: "",*/}
            {/*    password: "",*/}
            {/*    gender: "male",*/}
            {/*    hobies: [],*/}
            {/*    country: ''*/}
            {/*}} onSubmit={(values) => handleForm(values)}>*/}

            {/*    /!*1.Yöntem*!/*/}
            {/*    /!*<Form>*!/*/}

            {/*    /!*    <div>*!/*/}
            {/*    /!*        <label htmlFor="userName">Username: </label>*!/*/}
            {/*    /!*        <Field id="userName" name="userName"></Field>*!/*/}
            {/*    /!*    </div>*!/*/}

            {/*    /!*    <div>*!/*/}
            {/*    /!*        <label htmlFor="password">Password: </label>*!/*/}
            {/*    /!*        <Field id="password" name="password"></Field>*!/*/}
            {/*    /!*    </div>*!/*/}


            {/*    /!*    <button type="submit">Signup</button>*!/*/}

            {/*    /!*</Form>*!/*/}

            {/*    /!*2. Yöntem *!/*/}
            {/*    {({handleSubmit, handleChange, values}) => {*/}
            {/*        return (*/}
            {/*            <form onSubmit={handleSubmit}>*/}

            {/*                <div>*/}
            {/*                    <label htmlFor="userName">Username: </label>*/}
            {/*                    <input id="userName"*/}
            {/*                           value={values.userName}*/}
            {/*                           name="userName" onChange={handleChange}></input>*/}
            {/*                </div>*/}

            {/*                <div>*/}
            {/*                    <label htmlFor="password">Password: </label>*/}
            {/*                    <input id="password" name="password" onChange={handleChange}></input>*/}
            {/*                </div>*/}

            {/*                <div>*/}
            {/*                    <label>Gender</label>*/}

            {/*                    <input type="radio"*/}
            {/*                           value="male"*/}
            {/*                           name="gender"*/}
            {/*                           id="male"*/}
            {/*                           checked={values.gender === 'male'}*/}
            {/*                           onChange={handleChange}/>*/}
            {/*                    <span>Male</span>*/}

            {/*                    <input type="radio"*/}
            {/*                           value="female"*/}
            {/*                           name="gender"*/}
            {/*                           id="female"*/}
            {/*                           checked={values.gender === 'female'}*/}
            {/*                           onChange={handleChange}/>*/}
            {/*                    <span>Female</span>*/}
            {/*                </div>*/}

            {/*                <div>*/}
            {/*                    <input type="checkbox"*/}
            {/*                           name="hobies"*/}
            {/*                           onChange={handleChange}*/}
            {/*                           value="Football"/>*/}
            {/*                    <span>Football</span>*/}
            {/*                </div>*/}

            {/*                <div>*/}
            {/*                    <input type="checkbox"*/}
            {/*                           name="hobies"*/}
            {/*                           value="Cinema"*/}
            {/*                           onChange={handleChange}/>*/}
            {/*                    <span>Cinema</span>*/}
            {/*                </div>*/}

            {/*                <div>*/}
            {/*                    <input type="checkbox"*/}
            {/*                           name="hobies"*/}
            {/*                           value="Photography"*/}
            {/*                           onChange={handleChange}/>*/}
            {/*                    <span>Photography</span>*/}
            {/*                </div>*/}

            {/*                <div>*/}

            {/*                    <select name="country"*/}
            {/*                            value={values.country}*/}
            {/*                            onChange={handleChange}>*/}
            {/*                        <option value="">Please select a country</option>*/}
            {/*                        <option value="tr">Türkiye</option>*/}
            {/*                        <option value="en">İngiltere</option>*/}
            {/*                        <option value="usa">Amerika Birleşik Devletleri</option>*/}
            {/*                    </select>*/}
            {/*                </div>*/}

            {/*                <button type="submit">Register</button>*/}

            {/*                <br/>*/}

            {/*                {*/}
            {/*                    JSON.stringify(values)*/}
            {/*                }*/}


            {/*            </form>*/}
            {/*        )*/}
            {/*    }*/}
            {/*    }*/}

            {/*</Formik>*/}

        </div>
    );
}

export default App;
