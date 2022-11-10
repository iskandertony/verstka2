import "./Mission.scss"
import vision from "../../Imgs/vision.png"

const Mission = () => {
    return (
        <div className="mission">
            <div><img src={vision} alt="" /></div>
            <div className="mission-sub">Our mission</div>
            <div className="mission-text">We want to make routine tasks easy and enjoyable.</div>

        </div>
    )
}

export default Mission