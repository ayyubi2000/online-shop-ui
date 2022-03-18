import {Routes , Route} from 'react-router-dom';
import Index from "./Layout/Main/Main";
import Home from "./Pages/Home/Home"
// import Cards from './Conponents/Cards/Cards';
// import Items from './Conponents/Item/Items';
// import Navbar from './Conponents/Navbar/Navbar_';
// import Servis from './Conponents/Servis/Servis';
// import Infotable from './Conponents/Infotable/Infotable';
// import Laptops from './Conponents/Laptops/Laptops'
function App() {
  return (
    		<Routes>
          <Route path="/" element={<Index/>} >
              <Route path="/home" element={<Home/>} />
          </Route>
			</Routes>
  );
}
export default App;
