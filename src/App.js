import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './Conponents/Cards/Cards';
import Items from './Conponents/Item/Items';
import Navbar from './Conponents/Navbar/Navbar_';
import LikeCard from './Conponents/Cards/LikeCard'
import Laptops from './Conponents/Laptops/Laptops'

function App() {
  return (
    <>
    <Navbar/>
    <Laptops/>
      <Items/>

      <LikeCard/>

    </>
  );
}
export default App;
