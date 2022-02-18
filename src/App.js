import AOS from "aos";
import "aos/dist/aos.css";
//import all the pages
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./Components/Footer";
import NavbarCustom from "./Components/NavbarCustom";
import "./CSS/styles.css";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import LoginRegister from "./Pages/LoginRegister";
import Profile from "./Pages/Profile";
import { Terms } from "./Pages/Terms";
let App = () => {
  AOS.init();
  //create routing for pages home, events, about, contact, profile
  return (
    <>
      <Router>
        <NavbarCustom />
        <Footer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={LoginRegister} />
          <Route exact path="/terms" component={Terms} />
        </Switch>
        {/* <Route path="/:page" component={NavbarCustom} /> */}
        {/* <Route exact path="/" component={NavbarCustom} /> */}
      </Router>
    </>
  );
};

export default App;
