import 'bootstrap/dist/css/bootstrap.min.css';
 import Cards from './Conponents/Cards/Cards';
 import Items from './Conponents/Item/Items';
 import Navbar from './Conponents/Navbar/Navbar';
 import Servis from './Conponents/Servis/Servis';
import Infotable from './Conponents/Infotable/Infotable';
import Laptops from './Conponents/Laptops/Laptops'

function App() {
  return (
    <>
    <Navbar />
    <Items />
    <Laptops/>
    <Servis />
    <Infotable />
    </>
  );
}

export default App;
