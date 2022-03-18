import { memo } from "react";
import { Carousel } from "react-bootstrap";
import bannerbig from "./img/bannerbig.png"
const Carusel = () =>{
    return(
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
    )
}

export default memo(Carusel);