import "./Nabar_.css"

const Navbar_ = () => {
    return (
        <>
            <div className="Container-fluid Navbar-color" >
                <div className="row">
                    <div className="col-5 d-flex justify-content-center">
                        <span className="d-none d-lg-block ">
                            <i className="bi bi-telephone-fill "></i>
                            <span className="ms-1">+998 90 309 44 23</span>
                        </span>
                        <span className="ms-5 d-none d-lg-block">
                            <i className="bi bi-envelope ms-2"></i>
                            <span className="ms-2">Shop@gamil.com</span>
                        </span>
                    </div>
                    <div className="col-7 d-flex justify-content-around">
                        <span>
                            <i className="bi bi-geo-alt"></i>
                            <span className="ms-1">Locol Storia</span>
                        </span>
                        <span className="d-none d-lg-block">
                            <i className="bi bi-blockquote-left "></i>
                            <span className="ms-1">Blog</span>
                        </span>
                        <span className="d-none d-lg-block">
                            <i className="bi bi-file-earmark-lock"></i>
                            <span className="ms-1">Guaranee</span>
                        </span>
                        <span className="d-none d-lg-block">
                            <i className="bi bi-credit-card-2-back"></i>
                            <span className="ms-1">Payment</span>
                        </span>
                        <span className="d-none d-lg-block">
                            <i className="bi bi-truck"></i>
                            <span className="ms-1">Delivery</span>
                        </span>
                        <span className="">
                            <i className="bi bi-person-square"></i>
                            <span className="ms-1">Sign in</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

const NavBAr = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center mt-4">
                <span className="font-nav">
                    <span className="text-nav">YOU</span>
                    <span>SHOP</span>
                </span>
                <span className="ms-3 text-min-nav d-none d-lg-block">
                    <p>Description of your <p>online store</p></p>
                </span>
                <span>
                    <div className="ms-3 input-group  ">
                        <input type="text" className="form-control " placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-nav" type="button"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </span>
                <span className="ms-5 text-nav d-none d-lg-block">
                    <p className="ms-5 text-min-nav">7 days a week from  <p>8:00 am to 5:00 pm</p></p>
                </span>
                <span className="d-none d-lg-block">
                <p className="position-relative ms-5">
                <i className=" fs-2 bi bi-suit-heart"></i>
                            <span class="position-absolute btn-nav top-0  start-100 translate-middle badge rounded-pill  ">
                              1
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </p>
                </span>
                <span className="d-none d-lg-block">
                <p className="position-relative ms-5">
                <i className="fs-2 bi bi-cart3"></i>
                            <span class="position-absolute btn-nav top-0  start-100 translate-middle badge rounded-pill  ">
                              1
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </p>
                </span>
                <p className="ms-5 bold-nav d-none d-lg-block">My cart<p className="">$ 0.00</p></p>
            </div>

        </>
    );
}




const Navbar = () => {
    return (
        <>
            <Navbar_ />
            <NavBAr />
        </>
    );
}

export default Navbar;

