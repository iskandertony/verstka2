import "./Nav.scss";
import IconNav from "../../../Components/Logo/IconNav";
import LoginNav from "../../../Components/LoginClick/LoginNav";
import RegistrationNav from "../../../Components/RegistrationButton/RegistrationNav";
import Registration from "../../Registration/Registration";
import { Routes, Route, Link, Router } from "react-router-dom";
import text from "../../../App"

const Nav = () => {
  return (
    <div>
      <Routes>
        <Route path="/Registration" element={text} />
      </Routes>
      <div className="nav">
        <div className="nav-sub marginLeft">
          <IconNav />
        </div>
        <div className="nav-sub marginRight">
          <div className="nav-sub1">
            <LoginNav />
          </div>
          <div>
            <Link to="/Registration">
              <RegistrationNav />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Nav;
