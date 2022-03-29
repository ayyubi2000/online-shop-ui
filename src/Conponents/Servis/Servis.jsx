import Papka from "./../../Assets/Images/papka.png";
import Raketa from "./../../Assets/Images/raketa.png";
import Soat from "./../../Assets/Images/soat.png"
import Zontik from "./../../Assets/Images/zontik.png"
const Servis = () => {
    return (

        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6 col-lg-3  ">
                        <div className="row">
                            <div className="col-12 col-lg-3 mt-4">
                                <img src={Raketa} style={{ width: '50px', height: '50px' }} />
                            </div>
                            <div className="col-12 col-lg-9  mt-4">
                                <h4>Free Shipping</h4> <p>Free Shipping All Order</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 ">
                        <div className="row">
                            <div className="col-12 col-lg-3 mt-4">
                                <img src={Zontik} style={{ width: '50px', height: '50px' }} />
                            </div>
                            <div className="col-12 col-lg-9  mt-4">
                                <h4>Free Shipping</h4> <p>Free Shipping All Order</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 ">
                        <div className="row">
                            <div className="col-12 col-lg-3 mt-4">
                                <img src={Soat} style={{ width: '50px', height: '50px' }} />
                            </div>
                            <div className="col-12 col-lg-9  mt-4">
                                <h4>Free Shipping</h4> <p>Free Shipping All Order</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 ">
                        <div className="row">
                            <div className="col-12 col-lg-3 mt-4">
                                <img src={Papka} style={{ width: '50px', height: '50px' }} />
                            </div>
                            <div className="col-12 col-lg-9  mt-4">
                                <h4>Free Shipping</h4> <p>Free Shipping All Order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Servis;