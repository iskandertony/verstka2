import SaveTimeImg from "../../../Imgs/SaveTimeImg.png";
import ButtonApp from "../../../Components/ButtonApp/ButtonApp";
import "./SaveTime.scss"

const SaveTime = () => {
  return (
    <div className="saveTime">
      <div className="saveTime-text">
        <div className="names ">Save time with Udel</div>
        <div className="names-sub">
          The fastest and the most reliable way to deliver your ecommerce
          packages.
        </div>
        <div>
          <ButtonApp />
        </div>
      </div>
      <div>
        <div className="saveTime-img">
          <img src={SaveTimeImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SaveTime;
