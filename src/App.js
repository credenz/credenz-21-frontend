import AOS from "aos";
import "aos/dist/aos.css";
//import all the pages
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarCustom from "./Components/NavbarCustom";
import "./CSS/styles.css";
import AboutUs from "./Pages/AboutUs";
import ComingSoonHome from "./Pages/ComingSoonHome";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import LoginRegister from "./Pages/LoginRegister";
import Profile from "./Pages/Profile";
let App = () => {
  AOS.init();
  //create routing for pages home, events, about, contact, profile
  return (
    <Router>
      <Route path="/:page" component={NavbarCustom} />
      {/* <Route exact path="/" component={NavbarCustom} /> */}

      <Route exact path="/" component={ComingSoonHome} />
      {/* <Route exact path="/home" component={Home} /> */}
      <Route exact path="/events" component={Events} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={LoginRegister} />
    </Router>
  );
};

export default App;
