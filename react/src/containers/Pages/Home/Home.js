import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../../../components/Navbar/Navbar';
import InputFields from "../InputFields/InputFields";
import Footer from "../../../components/Footer/Footer";
import Login from "../../../containers/Pages/Login/Login";
import Register from "../../../containers/Pages/Register/Register";

function Home() {

  return (
    <Fragment>
      <Router>
        <Navbar />
        <Route exact path="/" component={InputFields} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
        {/* <Route path="/account/" component={Account} /> */}
      </Router>
      <Footer />
    </Fragment>
  );
}

export default Home;
