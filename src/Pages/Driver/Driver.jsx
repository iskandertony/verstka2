import "./Driver.scss";
import car from "../../Imgs/car.png";
import smile from "../../Imgs/smile.png";
import money from "../../Imgs/money.png";
import rocket from "../../Imgs/rocket.png";
import Footer from "../../Components/Logo/Footer";
import ButtonApp from "../../Components/ButtonApp/ButtonApp";
import Nav from "../Home/Nav/Nav";

const Driver = () => {
  return (
    <div className="driver">
      <Nav></Nav>
      <div className="driver-text">
        <div className="driver-text-sub1">
          Become a Driver and make good money
        </div>
        <div className="driver-text-sub2">
          To get started, just register and follow easy steps.
        </div>
      </div>

      <div className="driver-info">
        <div className="driver-info-why">Why UDEL</div>

        <div className="driver-info-sub">
          <div className="driver-info-sub-img">
            <img src={car} alt="" />
          </div>

          <div>
            <div className="driver-info-box">
              <div className="driver-info-sub-icon">
                <img src={smile} alt="" />
              </div>
              <div>
                <div className="driver-info-box-sub-text">
                  Become your own boss
                </div>
                <div className="driver-info-box-sub-text-sub">
                  No schedule, no office, no dispatch
                </div>
              </div>
            </div>

            <div className="driver-info-box">
              <div className="driver-info-sub-icon1">
                <img src={money} alt="" />
              </div>
              <div className="driver-info-box-sub">
                <div className="driver-info-box-sub-text">Make money</div>
                <div className="driver-info-box-sub-text-sub">
                  Make as much money as you wish
                </div>
              </div>
            </div>

            <div className="driver-info-box">
              <div className="driver-info-sub-icon">
                <img src={rocket} alt="" />
              </div>
              <div>
                <div className="driver-info-box-sub-text">Fast start</div>
                <div className="driver-info-box-sub-text-sub">
                  Easy account setup, earn money right away
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="driver-download">Download app for drivers:</div>
        <div className="driver-butoonApp">
          <ButtonApp />
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Driver;
