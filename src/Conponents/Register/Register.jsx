import {Formik , Form, useField  }from "formik"
import TextField from "./TextField";
import * as Yup from 'yup'
const Register = () => {
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
        confirmPassword :Yup.string()
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
                confirmPassword:""
             }
             }  
             validationSchema={validete}
             onSubmit={values => {
                 console.log(values)
             }}
              >
                 {formik =>(
                     <div>
                        <h1 className="my-4 font-weight-bold-dispalay-4">Sigin Up</h1>
                     <Form>
                       <TextField label="First Name " name="firstName" type="text"/>
                       <TextField label="last Name " name="lastName" type="text"/>
                       <TextField label="Email" name="email" type="email"/>
                       <TextField label="password" name="password" type="password"/>
                       <TextField label="Confirm password" name="confirmPassword" type="password"/>
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