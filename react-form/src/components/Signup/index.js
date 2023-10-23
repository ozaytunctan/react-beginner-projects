import {useFormik} from "formik";
import "./styles.modules.css";

import validations from "./validations";

import ErrorLabel from "../Inputs/ErrorLabel";

function Signup() {

    const {
        handleSubmit, handleChange, handleBlur,
        values, errors, touched
    } = useFormik({
            initialValues: {
                email: "",
                password: "",
                passwordConfirm: ""
            },
            onSubmit: (values) => {
                console.log(JSON.stringify(values));
            },
            validationSchema: validations
        }
    );

    return (
        <div className="container">
            <h3>Sign Up</h3>

            {/**/}
            <form className="signup-form"
                  onSubmit={handleSubmit}>

                {/* Email */}

                <div className="mb-3 row">

                    <label htmlFor="email"
                           className="col-sm-4 col-form-label">Email </label>

                    <div className="col-sm-8">
                        <input type="text"
                               value={values.email}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               className={`${errors.email && touched.email ? 'invalid' : ''} form-control`}
                               name="email"/>
                        <ErrorLabel touched={touched.email}
                                    errorMessage={errors.email}/>
                    </div>
                </div>


                {/* Password */}
                <div className="mb-3 row">
                    <label htmlFor="password"
                           className="col-sm-4 col-form-label">Password</label>

                    <div className="col-sm-8">
                        <input name="password"
                               value={values.password}
                               className={`${errors.password && touched.password ? 'invalid' : ''} form-control`}
                               onChange={handleChange}
                               onBlur={handleBlur}/>

                        <ErrorLabel touched={touched.password}
                                    errorMessage={errors.password}/>
                    </div>

                </div>

                {/* Password Confirm*/}
                <div className="mb-3 row">
                    <label htmlFor="passwordConfirm"
                           className="col-sm-4 col-form-label">Password Confirm</label>

                    <div className="col-sm-8">
                        <input name="passwordConfirm"
                               value={values.passwordConfirm}
                               className={`${errors.passwordConfirm && touched.passwordConfirm ? 'invalid' : ''} form-control`}
                               onChange={handleChange}
                               onBlur={handleBlur}/>
                        <ErrorLabel touched={touched.passwordConfirm}
                                    errorMessage={errors.passwordConfirm}/>
                    </div>

                </div>

                {/* Action Buttons*/}
                <div className="action-buttons">
                    <button className="btn btn-primary " type="submit">Login</button>
                </div>

                <code>
                    {JSON.stringify(values)}
                </code>

            </form>
        </div>
    );

}

export default Signup;