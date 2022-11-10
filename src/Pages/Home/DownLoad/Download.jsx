import "./Download.scss";
import ButtonApp from "../../../Components/ButtonApp/ButtonApp";

const DownLoad = () => {
  return (
    <div className="download">
      <div className="download-text">Download Our App</div>
      <div className="download-text-sub">
        The fastest and the most reliable way to deliver your ecommerce
        packages.
      </div>

      <div>
        <ButtonApp />
      </div>
    </div>
  );
};

export default DownLoad;
