import "./Iphone.scss";
import iphone from "../../../Imgs/📱 iPhone/iphone.png";
import phone from "../../../Imgs/Group1.png";
import phone2 from "../../../Imgs/Group2.png";
import phone3 from "../../../Imgs/Group3.png";

const Iphone = () => {
  return (
    <div className="phone">
      <div>
        <div className="phone-name">Featrures</div>
        <div className="phone-box">
          <div className="phone-img">
            <img src={phone} alt="" />
          </div>
          <div>
            <div className="phone-sub">Easy Pick & Drop</div>
            <div className="phone-sub-text">
              Convenient Pick-ups & Drop-offs with user-friendly interface
            </div>
          </div>
        </div>
        <div className="phone-box">
          <div className="phone-img">
            <img src={phone2} alt="" />
          </div>
          <div>
            <div className="phone-sub">Driver’s App</div>
            <div className="phone-sub-text">
              A separate app for drivers ensures better logistics &
              communication
            </div>
          </div>
        </div>
        <div className="phone-box">
          <div className="phone-img">
            <img src={phone3} alt="" />
          </div>
          <div>
            <div className="phone-sub">Real-Time Tracking</div>
            <div className="phone-sub-text">
              Let users track drivers and orders in real time
            </div>
          </div>
        </div>
      </div>
      <div className="iphone">
        <img src={iphone} alt="" />
      </div>
    </div>
  );
};

export default Iphone;
