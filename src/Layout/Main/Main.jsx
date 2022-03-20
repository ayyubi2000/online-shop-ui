import Navbar from "../../Conponents/Navbar/Navbar_"
import Carusel from "../../Conponents/Carousel/Carusel"
import Item from "../../Conponents/Item/Items"
import Product from "../../Conponents/fProducts/fProduct"
function Index() {
  return (
    <div className="app">
        <Navbar/>
        <Carusel/>
        <Item/>
        <Product/>
    </div>
  )
}

export default Index
