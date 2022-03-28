
import { Routes, Route } from 'react-router-dom';
import Index from "./Layout/Main/Main";
import "./Assets/Style/Config.scss";
import Home from "./Pages/Home/Home";
import Register from "./Conponents/Register/Register"

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
