import "./Registration.scss";
import boy from "../../Imgs/boy.png";
import lock from "../../Imgs/lock.png";
import udel from "../../Imgs/iconNav.png";

const Registration = () => {
  return (
    <div className="registrationPage">
      <div className="registrationPage-sub">
        <div>
          <img src={udel} alt="" />
        </div>
        <div className="registrationBig">Registration</div>

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

            <hr className="hr" />

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

          <div className="registration-logIn">Log in</div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
