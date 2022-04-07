import {Formik , Form, useField  }from "formik"
import TextField from "./TextField";
import * as Yup from 'yup'
import axios from "axios";
import { useState } from "react";
const Register = () => {
    const [validationError, setvalidationError] = useState([]);

    const validete = Yup.object({
        firstName:Yup.string()
        .max(15 , "Must be 15 character or less")
        .required("Required"),
        lastName: Yup.string()
        .max(20 , "Must be 20 character or less")
        .required("Required"),
        email : Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
        password:Yup.string()
        .min(6 , "Password must be at leasrt 6 charaters")
        .required("password is required"),
        Number :Yup.string()
        .oneOf([Yup.ref("password"),null],'Password must match')
        .required("Confirm password is required"),
    })
    return ( 
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-5">
             <Formik
             initialValues={{
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                Number:""
             }
             }  //44|llU9yCyRcMEJb15pINo11u8gu3CCFCWqkXC0wmwz
             validationSchema={validete}
             onSubmit={values => {
                 axios.post('/register',{
                    email: values.email,
                    name: values.firstName,
                    number: values.Number,
                    lastname: values.lastName ,
                    password :values.password
                 }).then(res => {
                     if(res.data.validation_errors){
                        setvalidationError(res.data.validation_errors);
                     }else if(res.status === 200){
                         localStorage.setItem('auth_token', res.data.token);
                         localStorage.setItem('Name',res.data.username);
                         localStorage.setItem('Lastname',res.data.lastname);
                         localStorage.setItem('Number',res.data.number);
                         window.location.pathname = '/';    
                      
                     }
                     console.log(res);
                 })
             }}
              >
                 {formik =>(
                     <div>
                        <h1 className="my-4 font-weight-bold-dispalay-4">Sigin Up</h1>
                     <Form>
                       <TextField label="First Name " name="firstName" type="text"/>
                       <span> {validationError.name ?? ''} </span>
                       <TextField label="last Name " name="lastName" type="text"/>
                       <span> {validationError.lastname ?? ''} </span>
                       <TextField label="Email" name="email" type="email"/>
                       <span> {validationError.email ?? ''} </span>
                       <TextField label="password" name="password" type="password"/>
                       <span> {validationError.password ?? ''} </span>
                       <TextField label="Number" name="Number" type="text"/>
                       <span> {validationError.number ?? ''} </span>
                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-danger mt-3 ms-3" type="reset">Reset</button>

                     </Form>
                     </div>
                 )
                 }
             </Formik>
            </div>
            <div className="col-md-7 mt-5">
                <img  className="img-fluid w-100" src="https://blog.zoom.us/wp-content/uploads/2021/09/zoom-developer-platform.png" alt="" />
            </div>
        </div>
    </div>
    </> );
}
 
export default Register;