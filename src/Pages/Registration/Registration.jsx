import "./Registration.scss";
import boy from "../../Imgs/boy.png";
import lock from "../../Imgs/lock.png";
import udel from "../../Imgs/udel.png";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="udel-top">
        <Link to="/">
          <img src={udel} alt="" />
        </Link>
      </div>

      <div className="registrationPage">
        <div className="registrationPage-sub">
          <div className="registration-title">
            <div className="registration-big">Registration</div>
          </div>

          <div className="registrationBox">
            <div className="registrationBox-sub">
              <div className="registration-name">Juridical relations:</div>
              <div className="registration-chose">
                <div>
                  <input type="radio" name="chose" />
                </div>
                <div className="registration-chose-sub">Individual account</div>
              </div>
              <div className="registration-chose">
                <div>
                  <input type="radio" name="chose" />
                </div>
                <div>Business account</div>
              </div>
              <div className="hr"></div>

              <div className="blank">
                <div className="blank-img">
                  <img src={boy} alt="" />
                </div>
                <div>
                  <div>
                    <input
                      type="text"
                      className="input"
                      placeholder="Upload logo"
                    />
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="blank margin1">
                <div className="blank-img">
                  <img src={boy} alt="" />
                </div>
                <div>
                  <div>
                    <input
                      type="text"
                      className="input"
                      placeholder="Company name"
                    />
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="blank margin2">
                <div className="blank-img">
                  <img src={lock} alt="" />
                </div>
                <div>
                  <div>
                    <input
                      type="password"
                      className="input"
                      placeholder="Phone number"
                    />
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="blank">
                <div className="blank-img">
                  <img src={lock} alt="" />
                </div>
                <div>
                  <div>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password..."
                    />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="createAccount">CREATE ACCOUNT</div>

            <div className="createAccount-sub">Already have an account?</div>
            <Link className="test" to="login">
              <div className="registration-logIn">Log in</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
