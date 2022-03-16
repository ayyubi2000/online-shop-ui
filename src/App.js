import "bootstrap/dist/css/bootstrap.min.css";
// import Cards from './Conponents/Cards/Cards';
// import Items from './Conponents/Item/Items';
import Navbar from "./Conponents/Navbar/Navbar_";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Conponents/Cards/Cards";
import Items from "./Conponents/Item/Items";
import Laptops from "./Conponents/Laptops/Laptops";

function App() {
  return (
    <>
      <Navbar />
      <Items />
      <Laptops />
    </>
  );
}

export default App;
