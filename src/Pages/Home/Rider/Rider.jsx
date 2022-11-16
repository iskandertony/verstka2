import "./Rider.scss";
import ButtonRider from "../../../Components/ButtonRider/ButtonRider";
import { Link } from "react-router-dom";
const Rider = () => {
  return (
    <div className="rider">
      <div className="rider-text">Want to be your own boss?</div>
      <div className="rider-text-sub">
        Start delivering today and make great money with your own schedule.
      </div>
      <div>
        <Link className="test" to="driver">
          <ButtonRider />
        </Link>
      </div>
    </div>
  );
};

export default Rider;
