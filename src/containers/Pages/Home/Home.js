import React, { Fragment, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import InputFields from "../InputFields/InputFields";
import About from "../About/About";
import Help from "../Help/Help";
import "./Home.css";
import Footer from "../../../components/Footer/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Router>
        <Navbar className="navbar" color="dark" dark expand="md">
          <NavbarBrand>
            <NavLink exact to="/" className="nav-main">
              Laporan ASN
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/about/" className="nav-item">
                  Tentang
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/help/" className="nav-item">
                  Bantuan
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Route exact path="/" component={InputFields} />
        <Route path="/about/" component={About} />
        <Route path="/help/" component={Help} />
      </Router>
      <Footer />
    </Fragment>
  );
}

export default Home;
