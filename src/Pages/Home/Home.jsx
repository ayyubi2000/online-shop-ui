import Carusel from "../../Conponents/Carousel/Carusel"
import Item from "../../Conponents/Item/Items"
import Product from "../../Conponents/fProducts/fProduct"
import {Routes , Route} from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Carusel />
          </div>
          <div className="col-12">
            <Item />
          </div>
          <div className="col-12">
            <Product />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
