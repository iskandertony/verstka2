import "./Nav.scss";
import IconNav from "../../../Components/Logo/IconNav";
import LoginNav from "../../../Components/LoginClick/LoginNav";
import RegistrationNav from "../../../Components/RegistrationButton/RegistrationNav";

const Nav = () => {
  return (
    <div className="nav">
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
