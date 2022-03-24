<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Index from "./Layout/Main/Main";
import Home from "./Pages/Home/Home"
=======
import {Routes , Route} from 'react-router-dom';
import "./Assets/Style/Config.scss";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
>>>>>>> 5236e24f3622a465a550d55504f81a5095f252f9
// import Cards from './Conponents/Cards/Cards';
// import Description from './Conponents/Description/Description';
// import Items from './Conponents/Item/Items';
// import Laptops from './Conponents/Laptops/Laptops';
// import Navbar from './Conponents/Navbar/Navbar_';
// import MemberLogin from './Conponents/Register/MeberLogn';
// import Register from './Conponents/Register/Register';
import Contakt from './Conponents/Contakt/Contakt';

function App() {
  return (
<<<<<<< HEAD
    // 	<Routes>

    //     {/* <Route path="/" element={<Index/>} >
    //         <Route path="/home" element={<Home/>} />
    //     </Route> */}
    // </Routes>
    <>
      <Contakt />
    </>
=======
    		<Routes>
          <Route path="/" element={<Main/>} >
              <Route path="/home" element={<Home/>} />
          </Route>
			</Routes>
>>>>>>> 5236e24f3622a465a550d55504f81a5095f252f9
  );
}
export default App;
