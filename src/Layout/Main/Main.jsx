import { Outlet } from "react-router-dom";
import Navbar from "../../Conponents/Navbar/Navbar_"
import Footer from "../../Conponents/Footer/Footer"

function Index() {
  return (
    <div className="w-100">
        <div className="row">
            <div className="col-12">
                <Navbar />
            </div>
            <div className="col-12">
                <Outlet />
            </div>
            <div className="col-12 ">
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Index;
