import "./Nav.scss";
import IconNav from "../../../Components/Logo/IconNav";
import LoginNav from "../../../Components/LoginClick/LoginNav";
import RegistrationNav from "../../../Components/RegistrationButton/RegistrationNav";
import Registration from "../../Registration/Registration";
import { Routes, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Routes>
        <Route path="registration" element={<Registration />} />
      </Routes>
      <div className="nav-sub marginLeft">
        <IconNav />
      </div>
      <div className="nav-sub marginRight">
        <div className="nav-sub1">
          <LoginNav />
        </div>
        <div>
          <RegistrationNav />
        </div>
      </div>
    </div>
  );
};

export default Nav;
