import { memo } from "react";
import { Carousel, Dropdown, ButtonGroup,DropdownButton } from "react-bootstrap";
import bannerbig from "./img/bannerbig.png";


const Carusel = () => {

  return (
    <div>
      <div className="container mt-1">
        <div className="row">
          <Dropdown className="col-lg-3">
            <Dropdown.Toggle variant="success" className="col-lg-12" id="dropdown-basic" style={{ backgroundColor: "#FF8E0A" }}>
              All Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Camera & Photo`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Laptops`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Mobile & Phones`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Audios & Videos`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Tablet & Laptop Acessasories`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Storage Devices`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={`Smart Electronics`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Security & Protections`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Networking`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Video Games`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="mb-2">
                  {['end'].map((direction) => (
                    <DropdownButton 
                      className="col-lg-12"
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="light"
                      title={` Storeage Devices`}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
            </Dropdown.Menu>
          </Dropdown>



          <div className="btn col-lg-1">
            Apple
          </div>
          <div className="btn col-lg-1">
            Samsung
          </div>
          <div className="btn col-lg-1">
            Meizu
          </div>
          <div className="btn col-lg-1">
            Xiaomi
          </div>
          <div className="btn col-lg-1">
            Honor
          </div>
          <div className="btn col-lg-1">
            Huawei
          </div>
          <div className="btn col-lg-1">
            Asus
          </div>
          <div className="btn col-lg-1">
            Nokia
          </div>
        </div>
      </div>

      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bannerbig}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bannerbig}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bannerbig}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>


  )
}

export default memo(Carusel);