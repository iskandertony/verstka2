import "./Rider.scss";
import ButtonRider from "../../../Components/ButtonRider/ButtonRider";

const Rider = () => {
  return (
    <div className="rider">
      <div className="rider-text">Want to be your own boss?</div>
      <div className="rider-text-sub">
        Start delivering today and make great money with your own schedule.
      </div>
      <div>
        <ButtonRider />
      </div>
    </div>
  );
};

export default Rider;
