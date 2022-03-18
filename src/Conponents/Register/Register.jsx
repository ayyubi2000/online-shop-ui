import "./Register.css"

const Register = () => {
    return (
        <>
            <div className="bg-reg container-fluid">
                <div className="d-flex justify-content-center">
                        <div className="log-in shadow-sm p-3 mb-5 bg-white rounded">
                            <p className="h4 text-center">Register</p>
                        <input type="text"  placeholder="Username" className="mt-3 form-control" />
                        <input type="Password"  placeholder="Password" className="mt-3 form-control" />
                        <input type="Password"  placeholder="Confirm Password" className="mt-3 form-control" />
                                 <div className=" ms-5 ">
                                 <button className="btn btn-info mt-3 ms-5 ">Register</button>
                                     </div> 
                        <p className="text-center text-danger mt-2">Mabers Login</p>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Register;