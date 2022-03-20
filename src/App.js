import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from "./Conponents/Blog/Blog";
import Cards from './Conponents/Cards/Cards';
import Items from './Conponents/Item/Items';
import Laptops from './Conponents/Laptops/Laptops';
import Navbar from './Conponents/Navbar/Navbar_';


function App() {
  return (
    <>
      <Navbar />
      <Items/>
      <Laptops/>
      <Blog/>
    </>
  );
}

export default App;
