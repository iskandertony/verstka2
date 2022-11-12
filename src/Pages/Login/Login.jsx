import "./Login.scss";
import boy from "../../Imgs/boy.png";
import lock from "../../Imgs/lock.png";
import udel from "../../Imgs/iconNav.png";

const Login = () => {
  return (
    <div className="login">
      <div>
        <img src={udel} alt="" />
      </div>
      <div className="login-name">Login</div>
      <div className="loginBox">
        <div className="loginBox-sub">
          <div className="loginBlank">
            <div className="loginBlank-img">
              <img src={boy} alt="" />
            </div>
            <div>
              <input
                type="text"
                name=""
                className="input"
                placeholder="Phone number"
              />
            </div>
          </div>

          <div className="loginBlank">
            <div className="loginBlank-img">
              <img src={lock} alt="" />
            </div>
            <div>
              <input
                type="password"
                name=""
                className="input"
                placeholder="Password..."
              />
            </div>
          </div>
        </div>

        <div className="loginButton">GET STARED</div>
        <div className="createAccount-sub">Don't have an account?</div>
        <div className="registration-logIn">Sign up</div>
      </div>
    </div>
  );
};

export default Login;
