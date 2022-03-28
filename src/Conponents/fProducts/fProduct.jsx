import { memo } from "react";
import "./fProducts.scss"
import imgw from "./img/w.png"
import imgd from "./img/d.png"
import imge from "./img/e.png"
import imga from "./img/a.png"
import imgf from "./img/f.png"
import imgo from "./img/o.png"
import imgb from "./img/b.png"
const fProducts = () => {
    return (
        <div className="container-fluid" id="fProduct-scss">
            <div className="container ">
            <h1 className="text-secondary">Featured Products</h1>
                <div className="row p-4">
                    <div id="fPCategory" className="col-12 d-flex justify-content-between">
                        <span>Laptop</span>
                        <span>Mobile Phones</span>
                        <span>Tablet</span>
                        <span>Camera&Photo</span>
                        <span>Audio&Video</span>
                        <span>Video Games</span>
                        <span>Storage Devices</span>
                        <span>Smart Electronics</span>
                        <span>Other</span>
                    </div>
                    <div className="bg-warning" style={{ height: '3px' }} ></div>
                </div>
            </div>
            <div className="container shadow" style={{ backgroundColor: 'white', height: '700px' }}>
                <div className="row">
                    <div className="col-12 d-flex flex-wrap-wrap mt-2">
                        <div className="col-lg-2 ">
                            <img src={imgw} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>
                        <div className="col-lg-2 ">
                            <img src={imge} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>
                        <div className="col-lg-2 ">
                            <img src={imga} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>
                        <div className="col-lg-2 ">
                            <img src={imgf} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>
                        <div className="col-lg-2 ">
                            <img src={imgo} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>
                        <div className="col-lg-2 ">
                            <img src={imgd} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>


                    </div>
                    <div className="col-12 d-flex flex-wrap-wrap mt-2">
                        <div className="col-lg-2 ">
                            <img src={imge} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>
                        <div className="col-lg-2 ">
                            <img src={imgw} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>
                        <div className="col-lg-2 ">
                            <img src={imgb} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>
                        <div className="col-lg-2 ">
                            <img src={imga} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>
                        <div className="col-lg-2 ">
                            <img src={imgd} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>
                        <div className="col-lg-2 ">
                            <img src={imgf} style={{ width: '200px', height: '200px' }} /><br></br>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <p>Lenovo P8 Tab3 8 plus TB </p>
                            <p>$659.00</p>
                        </div>


                    </div>
                </div>
            </div>
            <footer className="container mt-2 bg-white d-flex align-items-center justify-content-center" >
                <i className='bx bx-revision'></i>
                <span>Show more...</span>
            </footer>
        </div>
    )
}

export default memo(fProducts);