import Nav from "./Pages/Home/Nav/Nav";
import "./App.scss";
import SaveTime from "./Pages/Home/SaveTime/SaveTime";
import About from "./Pages/Home/About/About";
import Mission from "./Pages/Home/Mission/Mission";
import Iphone from "./Pages/Home/Iphone/Iphone";
import DownLoad from "./Pages/Home/DownLoad/Download";
import Rider from "./Pages/Home/Rider/Rider";
import Footer from "./Components/Logo/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
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
  );
}

export default App;
