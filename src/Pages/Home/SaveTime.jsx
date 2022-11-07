import SaveTimeImg from "../../Imgs/SaveTimeImg.png";
import ButtonApp from "../../Components/Logo/ButtonApp";
import "./SaveTime.scss"

const SaveTime = () => {
  return (
    <div className="SaveTime">
      <div className="SaveTime-text">
        <div className="names ">Save time with Udel</div>
        <div className="names-sub SaveTimeMargin">
          The fastest and the most reliable way to deliver your ecommerce
          packages.
        </div>
        <div>
          <ButtonApp />
        </div>
      </div>
      <div>
        <div >
          <img src={SaveTimeImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SaveTime;
