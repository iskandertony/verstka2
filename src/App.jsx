import Nav from "./Pages/Home/Nav";
import "./App.scss";
import SaveTime from "./Pages/Home/SaveTime";
import About from "./Pages/Home/About";
import Mission from "./Pages/Home/Mission";
import Iphone from "./Pages/Home/Iphone";
import DownLoad from "./Pages/Home/Download";
import Rider from "./Pages/Home/Rider";
import Footer from "./Components/Logo/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <SaveTime />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Mission />
      </div>
      <div>
        <Iphone />
      </div>
      <div>
        <DownLoad />
      </div>
      <div>
        <Rider />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
