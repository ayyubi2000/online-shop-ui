import User from "./../../Assets/Images/User.png";
import swal from "sweetalert";
import axios from "axios";
import "./Contakt.css";

const Contakt = () => {
  function logout_user() {
    swal({
      title: "To'xtang !",
      text: "Xaqiatdan ham chiqib ketmoqchimisz agar chiqib ketsangiz malumotlaringiz uchib ketadi!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.get("/logout");
        localStorage.removeItem("auth_token");
        swal("Siz Saytdan Muvaffaqiyatli Chopildingiz", {
          icon: "success",
        });
        window.location.pathname = "/";
      } else {
        swal("Siz Saytda qoldingiz !");
      }
    });
  }

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-5">
          <div className="row">
            <div className="col-lg-12 ">
              <button className="btm">
                <i
                  className="bi bi-arrow-left-short "
                  style={{ fontSize: "40px" }}
                ></i>
              </button>
              <img src={User} className=" imgs ms-5" />
              <button className="box rounded-circle ms-3">
                <i
                  className="bi bi-plus-circle-fill text-warning "
                  style={{ fontSize: "50px" }}
                ></i>
              </button>
            </div>
            <div className="col-lg-12">
              <h4 className="mt-4 ms-5">
                Username: {localStorage.getItem("Name")}
              </h4>
              <h4 className="mt-3 ms-5">
                Lastname: {localStorage.getItem("Lastname")}
              </h4>
              <h4 className="mt-3 ms-5">
                Number: {localStorage.getItem("Number")}{" "}
              </h4>
              <p className="mt-3 ms-5">Tasks</p>
              <p className="mt-3 ms-5">Calendar</p>
              <p className="mt-3 ms-5">Files</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <h5 className="mt-5">Nora spends most of their time on...</h5>
          <div className="alert bg-secondary mt-3">
            <h3>
              <i className="bi bi-phone"></i> Product Infrastructura
            </h3>
          </div>
          <div className="alert bg-secondary mt-3">
            <h3>
              <i className="bi bi-lock"></i>Network Security
            </h3>
          </div>
          <div className="alert bg-secondary mt-3">
            <h3>
              <i className="bi bi-pin-map-fill"></i> Security Testing
            </h3>
          </div>
          <div className="alert bg-secondary mt-3">
            <h3>
              <i className="bi bi-globe"></i> Security Audit Outsourcing
            </h3>
          </div>
          <div className="alert bg-secondary mt-3">
            <h3>
              <i className="bi bi-bug-fill"></i> Bugs
            </h3>
          </div>
        </div>
        <div className="col-lg-2">
          <button className="btn btn-success ms-5 mt-4" onClick={logout_user}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contakt;

function LogoutHandle() {
  return (
    <ul className="profile-link">
      <span>
        <a>
          <i className="bi bi-box-arrow-left"></i> Log out
        </a>
      </span>
    </ul>
  );
}
