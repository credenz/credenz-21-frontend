import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
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
import CartContext from "./Components/CartContext";

let App = () => {
  AOS.init();
  const [cart, setCart] = React.useState([]);
  const [cartModal, setCartModal] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState({});
  const value = {
    cart,
    setCart,
    cartModal,
    setCartModal,
    userDetails,
    setUserDetails,
  };
  //create routing for pages home, events, about, contact, profile
  return (
    <CartContext.Provider value={value}>
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
    </CartContext.Provider>
  );
};

export default App;
