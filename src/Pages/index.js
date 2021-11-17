import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import all the pages
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import LoginRegister from "./Pages/LoginRegister";
import AboutUs from "./AboutUs";
function App() {
  //create routing for pages home, events, about, contact, profile
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/profile" component={Profile} />
        <Router path="/login" component={LoginRegister} />
      </Switch>
    </Router>
  );
}

export default App;
