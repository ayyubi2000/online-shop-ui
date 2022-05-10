import React from 'react'
import { Formik, Form, useField } from "formik";
import TextField from "./TextField";
import * as Yup from 'yup'
import axios from "axios";
import { useState } from "react";

const Login = () => {
    const { error, seterror } = useState("");
    const [validationError, setvalidationError] = useState([]);

    const validete = Yup.object({
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at leasrt 6 charaters")
            .required("password is required"),
    })
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }
                            }
                            validationSchema={validete}
                            onSubmit={values => {
                                axios.post('/login', {
                                    email: values.email,
                                    password: values.password
                                }).then(res => {
                                    if (res.data.validation_errors) {
                                        setvalidationError(res.data.validation_errors);
                                    } else if (res.status === 200) {
                                        localStorage.setItem('auth_token', res.data.token);
                                        window.location.pathname = '/contact';

                                    }
                                    else if (res.status === 401) {
                                        seterror('Email yoki Parol Notugri')

                                    }

                                })
                            }}
                        >
                            {formik => (
                                <div className='col-lg-12'>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-9'>
                                                <h1 className="my-4 font-weight-bold-dispalay-4">Log In</h1>
                                            </div>
                                            <div className='col-3'>
                                                <button className='btn btn btn-success d-lg-none mt-4 ' onClick={() => window.location.pathname = "/register"}>Sign Up</button>
                                            </div>
                                        </div>  
                                    </div>
                                    <Form>
                                        <TextField label="Email" name="email" type="email" />
                                        <span> {validationError.email ?? ''} </span>
                                        <TextField label="Password" name="password" type="password" />
                                        <span> {validationError.password ?? ''} </span>
                                        <button className="btn btn-dark mt-3" type="submit">Log In</button>
                                        <button className="btn btn-danger mt-3 ms-3" type="reset">Reset</button>


                                    </Form>
                                </div>
                            )
                            }
                        </Formik>
                    </div>

                    <div className="col-md-7 mt-5">
                        <div className='row'>
                            <div className='col-lg-10'>
                                <img className="img-fluid w-100" src="https://blog.zoom.us/wp-content/uploads/2021/09/zoom-developer-platform.png" alt="" />
                            </div>
                            <div className='col-lg-2'>
                                <button className='btn btn btn-success d-none d-lg-block' onClick={() => window.location.pathname = "/register"}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}
export default Login;
