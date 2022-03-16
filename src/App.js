import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Conponents/Cards/Cards';
import Description from './Conponents/Description/Description';
import Items from './Conponents/Item/Items';
import Laptops from './Conponents/Laptops/Laptops';
import Navbar from './Conponents/Navbar/Navbar_';


function App() {
  return (
    <>
     <Navbar/>
      <Items/>
      <Laptops/>
      <Description/>
    </>
  );
}

export default App;
