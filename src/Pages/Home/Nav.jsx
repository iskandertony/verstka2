import "./Nav.scss";
import IconNav from "../../Components/Logo/IconNav";
import LoginNav from "../../Components/LoginNav";
import RegistrationNav from "../../Components/RegistrationNav";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav-sub marginLeft">
        <IconNav />
      </div>
      <div className="Nav-sub marginRight">
        <div className="Nav-sub1">
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
