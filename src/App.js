import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import all the pages
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import LoginRegister from "./Pages/LoginRegister";
import NavbarCustom from "./Components/NavbarCustom";
import "./CSS/styles.css";
let App = () => {
  //create routing for pages home, events, about, contact, profile
  return (
    <Router>
      <Route path="/:page" component={NavbarCustom} />
      <Route exact path="/" component={NavbarCustom} />

      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={LoginRegister} />
    </Router>
  );
};

export default App;
