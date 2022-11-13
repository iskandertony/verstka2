import "./Footer.scss";
import facebook from "../../Imgs/Facebook.png";
import instagram from "../../Imgs/Instagram.png";
import twitter from "../../Imgs/Twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">© UDEL LLC</div>
      <div className="footer-img">
        <div>
          <img src={facebook} alt="" />
        </div>
        <div className="footer-sub">
          <img src={instagram} alt="" />
        </div>
        <div>
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
