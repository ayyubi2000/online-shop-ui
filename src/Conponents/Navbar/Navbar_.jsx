import { useState } from "react";
import "./Nabar_.css";

const Navbar_ = () => {
    return (
        <div className="Container-fluid Navbar-color">
            <div className="row">
                <div className="col-4 col-lg-5 col d-flex justify-content-evenly align-items-center">
                    <span className="d-none d-lg-block"><i className="bi bi-telephone-fill "></i> +998 90 309 44 23</span>
                    <span className="ms-2"><i className="bi bi-envelope ms-2"></i> Shop@gamil.com</span>
                </div>
                <div className="col-6 col-lg-6 d-none d-lg-flex justify-content-around">
                    <span className="ms-1"> <i className="bi bi-geo-alt"></i> Locol Storia</span>
                    <span className="ms-1"><i className="bi bi-blockquote-left "></i> Blog</span>
                    <span className="ms-1"><i className="bi bi-file-earmark-lock"></i> Guaranee</span>
                    <span className="ms-1"><i className="bi bi-credit-card-2-back"></i> Payment</span>
                    <span className="ms-1"><i className="bi bi-truck"></i>Delivery</span>
                    
                </div>
            </div>
        </div>
        
    );
};

const Navbar = () => {
    const [off, setOff] = useState(false);
    return (
        <>
            <div className="container-fluid  shadow">
                <div className="row p-2">
                    <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center font-nav">
                        <strong className="text-nav" onClick={()=> window.location.pathname = "/"}>YOU</strong>
                        <strong onClick={()=> window.location.pathname = "/"} >SHOP</strong>
                    </div>
                    <div className="col-12 col-lg-5 d-flex justify-content-around align-items-center">
                        <input
                            type="text"
                            className="form-control rouded-l-t"
                            placeholder="Search"
                        />
                        <button className="btn btn-nav rouded-r-b pe-4" type="button">
                            <i className="bi bi-search text-white "></i>
                        </button>
                    </div>
                    <div className="col-lg-4 d-none d-lg-flex justify-content-center align-items-center">
                        <div className="ms-4">
                            <i  className="bx bx-heart fs-1 position-relative">
                                <span className="position-absolute fs-6 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    9+
                                </span>
                            </i>
                        </div>
                        <div className="ms-4">
                            <i  className="bx bx-cart-alt fs-1 position-relative">
                                <span className="position-absolute fs-6 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    9+
                                </span>
                            </i>
                        </div>
                        <div className="ms-5">
                            <button id="btnLogIn" className="btn btn-danger ms-1 " 
                            onClick={()=> window.location.pathname = "/register"} >Log In</button>
                        </div>

                        <div className="ms-3">
                            <i className='bx bxs-user-circle fs-1 ms-4 '
                             onClick={()=> window.location.pathname = "http://localhost:3000/contact"}></i>
                        </div>
                    </div>
                </div>
            </div>
                 
            {/* <div className="offcanvas-aa" style={{ width: off ? "300px" : "0px" }}>
                <div className="input-group w-75 m-auto ">
                    <input
                        type="text"
                        className="form-control "
                        placeholder="Search"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-nav" type="button">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div> */}
        </>
    );
};

const Index = () => {
    return (
        <>
            <Navbar_ />
            <Navbar />
        </>
    );
};

export default Index;
