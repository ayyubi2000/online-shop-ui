import { memo } from "react";
import "./fProducts.scss"
import {NavDropdown} from "react-bootstrap"
import Cards from "../Cards/Cards";
const fProducts = () => {
    return (
        <div className="otaDIV container-fluid ">
            <div className="container ">
                <h1 className="text-secondary">Featured Products</h1>
                <div className="row ">
                    <div id="fPCategory" className="col-12 d-none mt-4 d-lg-block d-flex justify-content-between">
                        <button className="btn">Laptop</button>
                        <button className="btn">Mobile Phones</button>
                        <button className="btn">Tablet</button>
                        <button className="btn">Camera&Photo</button>
                        <button className="btn">Audio&Video</button>
                        <button className="btn">Video Games</button>
                        <button className="btn">Storage Devices</button>
                        <button className="btn">Smart Electronics</button>
                        <button className="btn">Other</button>
                    </div>
                    <NavDropdown title="Product" id="basic-nav-dropdown" className="d-lg-none">
                        <NavDropdown.Item id="s" >Laptop</NavDropdown.Item>
                        <NavDropdown.Item id="s">Mobile Phones</NavDropdown.Item>
                        <NavDropdown.Item id="s">Tablet</NavDropdown.Item>
                        <NavDropdown.Item id="s">Camera&Photo</NavDropdown.Item>
                        <NavDropdown.Item id="s">Audio&Video</NavDropdown.Item>
                        <NavDropdown.Item id="s">Video Games</NavDropdown.Item>
                        <NavDropdown.Item id="s">Storage Devices</NavDropdown.Item>
                        <NavDropdown.Item id="s">Smart Electronics</NavDropdown.Item>
                        <NavDropdown.Item id="s">Other</NavDropdown.Item>
                    </NavDropdown>
                    <div className="bg-warning" style={{ height: '3px' }} ></div>
                </div>
            </div>
            <div className="container shadow-sm" style={{ backgroundColor: 'white', }}>
                <div className="row">  
                    <div className="mt-3 row d-flex justify-content-evenly p-1">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        
                    </div>
                </div>
            </div>
            <footer className="container" >
                <button className="btn btn-warning w-100 mt-3">
                    <i className='bx bx-revision'></i>
                    show more
                    </button>
            </footer>
        </div>
    )
}

export default memo(fProducts);