import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../../../components/Navbar/Navbar';
import InputFields from "../InputFields/InputFields";
import Help from "../Help/Help";
import Footer from "../../../components/Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";

function Home() {

  return (
    <Fragment>
      <Router>
        <Navbar />
        <Route exact path="/" component={InputFields} />
        <Route path="/help/" component={Help} />
        <Route path="/register/" component={Register} />
        <Route path="/login/" component={Login} />
      </Router>
      <Footer />
    </Fragment>
  );
}

export default Home;
