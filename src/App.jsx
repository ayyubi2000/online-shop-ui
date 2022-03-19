import {Routes , Route} from 'react-router-dom';
import Index from "./Layout/Main/Main";
import Home from "./Pages/Home/Home"
// import Cards from './Conponents/Cards/Cards';
// import Description from './Conponents/Description/Description';
// import Items from './Conponents/Item/Items';
// import Laptops from './Conponents/Laptops/Laptops';
// import Navbar from './Conponents/Navbar/Navbar_';
// import MemberLogin from './Conponents/Register/MeberLogn';
// import Register from './Conponents/Register/Register';
// import Servis from './Conponents/Servis/Servis';

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
