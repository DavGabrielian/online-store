import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage'
import Phone from "./components/Phone";
import Tablet from "./components/Tablet";
import Watch from "./components/Watch";
import Camera from "./components/Camera";
import Computer from "./components/Computer";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/phones" component={Phone} />
          <Route path="/tablets" component={Tablet} />
          <Route path="/watches" component={Watch} />
          <Route path="/cameras" component={Camera} />
          <Route path="/computers" component={Computer} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
