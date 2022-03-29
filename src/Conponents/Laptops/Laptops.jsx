import Cards from "../Cards/Cards";
import "./Laptops.css"
import Accordion from 'react-bootstrap/Accordion'
import Collapse from 'react-bootstrap/Collapse';
import { Button } from "react-bootstrap"
import { useState } from "react";

const Laptops = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Laptops-bg">
      <div className="container mt-3">
        <h2>Tablet $ Laptops Acceccories </h2>
        <div className="d-flex justify-content-center">
          <div className="col-12 col-lg-3 ">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className="d-lg-none ms-3"
            >
              x
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text"className="d-lg-none">
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

const Filter = () => {
  return (<>
    <div className="container-fluid ">
      <div className="container shadow-sm p-3 mb-5 bg-white rounded Filter-bg mt-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="font-weight-bold">
              Related Categories
            </Accordion.Header>
            <Accordion.Body>
              Tablet & Laptops Acceccories
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Refine by</Accordion.Header>
            <Accordion.Body>
              <input type="text" className="form-control" />
              <p className="text-center mt-2">Clear All</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Price</Accordion.Header>
            <Accordion.Body>
              <input type="text" className="form-control" />
              <p className="text-center mt-2">Price: $55 — $5000</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Operating System</Accordion.Header>
            <Accordion.Body>
              <p className=" mt-2">
                Android 6.0 <br />
                Android 5.1<br />
                Android 5.0<br />
                Android 4.4</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Screen Size</Accordion.Header>
            <Accordion.Body>
              <p className=" mt-2">
                1920x1200 <br />
                1280x800 <br />
                2560x1600 <br />
                1920x1080 <br />
                2048X1536 <br />
                1920*1280 <br />
                1024x600</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="font-weight-bold">
              Processor Core
            </Accordion.Header>
            <Accordion.Body>
              Tablet Data Capacity
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="font-weight-bold">
              Tablet Data Capacity
            </Accordion.Header>
            <Accordion.Body>
              Tablet Data Capacity
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  </>);
}
const Laptops_body = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <div className="col-6">
            <span>sa</span>
            <span>sa</span>
            <span>sa</span>
          </div>
          <div className="col-6 text-center">
            salom
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
      </div>
    </>
  )
}
