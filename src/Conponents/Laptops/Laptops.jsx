import Cards from "../Cards/Cards";
import "./Laptops.css"
import Collapse from 'react-bootstrap/Collapse';
import { useState } from "react";
import { Button,DropdownButton,Dropdown,FormControl } from "react-bootstrap";
import Filter from "./Filter";
import Recently from "./Recently";

const Laptops = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Laptops-bg">
      <div className="container mt-3">
        <h2>Tablet $ Laptops Acceccories </h2>
        <div className="d-flex justify-content-center">
          <div className="col-12 col-lg-3 ">
            <button
            onClick={() => setOpen(!open)}
              className="d-lg-none ms-3 btn-outline-warning btn"
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <i className='bx bx-menu-alt-left fs-3'></i>
            </button>
            <Collapse in={open}>
              <div id="example-collapse-text" className="d-lg-none">
                <Filter />
              </div>
            </Collapse>
            <Collapse in={open}>
              <div id="example-collapse-text" className="d-lg-none d-block" >
                <Laptops_body />
              </div>
            </Collapse>
            <div className="d-lg-block d-none">
              <Filter />
            </div>
          </div>
          <div className="col-12 col-lg-9 d-lg-block d-none ">
            <Laptops_body />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptops;


const Laptops_body = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <div className="col-lg-6 d-lg-block d-none">
            <i className='fs-2 bx bx-menu text-warning'></i>
            <i className=' bx fs-3 bxs-grid-alt ms-2'></i>
          </div>
          <div className="col-6 text-center">
              <DropdownButton
                variant="outline-warning"
                title="Sort by: price low to high"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
          </div>
        </div>
        <div className="container shadow-sm p-3 mb-5 bg-white rounded Filter-bg mt-3">
          <div className="row text-center">
            <div className="col-6 col-lg-3 ">
              <Cards />
            </div>
            <div className="col-6 col-lg-3">
              <Cards />
            </div>
            <div className="col-6 col-lg-3">
              <Cards />
            </div>
            <div className="col-6 col-lg-3">
              <Cards />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
           <div className="col-lg-12">
             <button className="btn btn-outline-warning w-100">Show more</button>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

