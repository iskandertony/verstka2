import Nav from "./Nav/Nav";
import SaveTime from "./SaveTime/SaveTime";
import About from "./About/About";
import Mission from "./Mission/Mission";
import Iphone from "./Iphone/Iphone";
import DownLoad from "./DownLoad/Download";
import Rider from "./Rider/Rider";
import Footer from "../../Components/Logo/Footer";

function Home() {
    return(
    <div>
        <Nav />
        <div>
            <SaveTime />
        </div>
        <div className="appAbout">
            <About />
        </div>
        <div className="appMission">
            <Mission />
        </div>
        <div>
            <Iphone />
        </div>
        <div className="appDownload">
            <DownLoad />
        </div>
        <div className="appRider">
            <Rider />
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
}

export default Home
