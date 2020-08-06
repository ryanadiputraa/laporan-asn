import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../../../components/Navbar/Navbar';
import InputFields from "../InputFields/InputFields";
import About from "../About/About";
import Help from "../Help/Help";
import Footer from "../../../components/Footer/Footer";
import Login from "../Login/Login";

function Home() {

  return (
    <Fragment>
      <Router>
        <Navbar />
        <Route exact path="/" component={InputFields} />
        <Route path="/about/" component={About} />
        <Route path="/help/" component={Help} />
        <Route path="/login/" component={Login} />
      </Router>
      <Footer />
    </Fragment>
  );
}

export default Home;
