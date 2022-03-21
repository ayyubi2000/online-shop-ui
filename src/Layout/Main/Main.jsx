import Navbar from "../../Conponents/Navbar/Navbar_"
import Home from "../../Pages/Home/Home"
import { Routes, Route } from 'react-router-dom';
import Laptops from '../../Conponents/Laptops/Laptops'
function Index() {
  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
          <div className="col-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/laptops" element={<Laptops />} />
            </Routes>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Index
