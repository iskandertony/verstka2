import "./About.scss";
import phone from "../../Imgs/phone.png";
import people from "../../Imgs/people.png";

const About = () => {
  return (
    <div className="about">
      <div>
        <img src={phone} alt="img" />
      </div>
      <div>
        <div className="about-img">
          <img src={people} alt="" />
        </div>
        <div className="names">About us</div>
        <div className="names-sub">
          UDEL is a technology that connects people in delivery process in a
          smart way.
        </div>
      </div>
    </div>
  );
};

export default About;
