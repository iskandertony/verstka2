import "./Nav.scss";
import IconNav from "../../../Components/Logo/IconNav";
import LoginNav from "../../../Components/LoginClick/LoginNav";
import RegistrationNav from "../../../Components/RegistrationButton/RegistrationNav";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-sub marginLeft">
          <IconNav />
        </div>
      </Link>
      <div className="nav-sub marginRight">
        <div className="nav-sub1">
          <Link className="test" to="login">
            <LoginNav />
          </Link>
        </div>

        <div>
          <Link className="test" to="registration">
            <RegistrationNav />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
