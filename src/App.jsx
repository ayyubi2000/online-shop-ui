import { Routes, Route } from 'react-router-dom';
import Index from "./Layout/Main/Main";
import "./Assets/Style/Config.scss";
import Home from "./Pages/Home/Home";
import Filter from './Pages/Home/Filter';
import ProductPages from './Pages/Home/Produc';
import RegisTer from './Pages/Home/RegisTer';
import Contact from './Pages/Home/Contact';

function App() {
  return (
    	<Routes>
         <Route path="/" element={<Index/>} >
            <Route path="/" element={<Home/>} />
            <Route path="/filter" element={<Filter/>} />
            <Route path="/product" element={<ProductPages/>} />
            <Route path="/contakt" element={<Contact/>} />
        </Route>
        <Route path="/register" element={<RegisTer/>} />
    </Routes>
  
  );
}
export default App;
