import Carusel from "../../Conponents/Carousel/Carusel"
import Product from "../../Conponents/fProducts/fProduct"
import {Routes , Route} from 'react-router-dom';
import Items from "../../Conponents/Item/Items";
function Home() {
  return (
    <div>
      <Carusel/>
      <Items/>
      <Product/>
    </div>
  )
}

export default Home
