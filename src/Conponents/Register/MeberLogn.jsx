import "./Register.css"

const MemberLogin = () => {
    return (
        <>
            <div className="bg-ref container-fluid">
                <div className="d-flex justify-content-center">
                        <div className="log-in shadow-sm p-3 mb-5 bg-white rounded">
                            <p className="h4 text-center"> Member Login</p>
                        <input type="text"  placeholder="Username" className="mt-4 form-control" />
                        <input type="Password"  placeholder="Password" className="mt-4 form-control" />
                        
                                 <div className=" ms-5 ">
                                 <button className="btn btn-info mt-4 ms-5 ">Login</button>
                                     </div> 
                        <p className="text-center text-danger mt-4">Mabers Login</p>
                        </div>
                </div>
            </div>
        </>
    );
}

export default  MemberLogin;

