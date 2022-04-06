import { Routes, Route } from 'react-router-dom';
import Index from "./Layout/Main/Main";
import "./Assets/Style/Config.scss";
import Home from "./Pages/Home/Home";
import Filter from './Pages/Home/Filter';
import ProductPages from "./Pages/Home/Produc";
import Contact from "./Pages/Home/Contact";
import Register from "./Pages/Home/RegisTer"
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

 const [Auth, setAuth] = useState(false);

 useEffect(()=>{
   localStorage.getItem('auth_token') ? setAuth(true) : setAuth(false);
 }, [])

  



  return Auth ? (
      <Routes>
          <Route path="/" element={<Index/>} >
              <Route path="/" element={<Home/>} />
              <Route path="/filter" element={<Filter/>} />
              <Route path="/product" element={<ProductPages/>} />
              <Route path="/contact" element={<Contact/>} />
          </Route>
			</Routes>
      ) : (
      <Routes>
          <Route path="/" element={<Index/>} >
              <Route path="/" element={<Home/>} />
              <Route path="/filter" element={<Filter/>} />
              <Route path="/product" element={<ProductPages/>} />
          </Route>
          <Route path="/register" element={<Register/>} />
			</Routes>
      )
}
export default App;
