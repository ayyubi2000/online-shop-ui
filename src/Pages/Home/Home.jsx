import Carusel from "../../Conponents/Carousel/Carusel"
import Product from "../../Conponents/fProducts/fProduct"
import {Routes , Route} from 'react-router-dom';
import Items from "../../Conponents/Item/Items";
import Servis from "../../Conponents/Servis/Servis";
import Blog from "../../Conponents/Blog/Blog";
function Home() {
  return (
    <div>
      <Carusel/>
      <Servis/>
      <Items/>
      <Product/>
      <Blog/>
    </div>
  )
}

export default Home
