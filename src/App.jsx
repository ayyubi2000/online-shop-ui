import { Routes, Route } from 'react-router-dom';
import Main from "./Layout/Main/Main";
import "./Assets/Style/Config.scss";
import Home from "./Pages/Home/Home";
import Laptops from './Conponents/Laptops/Laptops';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Main/>} >
              <Route path="/" element={<Home/>} />
              <Route path="/laptops" element={<Laptops/>} />
          </Route>
			</Routes>
  );
}
export default App;
