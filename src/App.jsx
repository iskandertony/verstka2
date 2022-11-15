import Nav from "./Pages/Home/Nav/Nav";
import "./App.scss";
import SaveTime from "./Pages/Home/SaveTime/SaveTime";
import About from "./Pages/Home/About/About";
import Mission from "./Pages/Home/Mission/Mission";
import Iphone from "./Pages/Home/Iphone/Iphone";
import DownLoad from "./Pages/Home/DownLoad/Download";
import Rider from "./Pages/Home/Rider/Rider";
import Footer from "./Components/Logo/Footer";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Driver from "./Pages/Driver/Driver";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <SaveTime />
      </div>
      <div>
        <Login></Login>
        <Registration></Registration>
        <Driver></Driver>
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

function text() {
  return (
    <div><Registration/></div>
  )
}

export default App;
