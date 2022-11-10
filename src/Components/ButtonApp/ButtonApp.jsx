import "./ButtonApp.scss"
import Apple from "../../Imgs/Apple.png"

const ButtonApp = () => {
    return (
        <div className="button">
            <div className="app-img">
                <img src={Apple} alt="apple" />
            </div>
            <div>
            <div className="app">Available on the</div>
            <div className="app-sub">App Store</div>

            </div>

        </div>
    )
}

export default ButtonApp