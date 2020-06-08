import React, { Fragment, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import InputFields from '../InputFields/InputFields';
import About from '../About/About';
import Help from '../Help/Help';
import './Home.css';
import Footer from '../../../components/Footer/Footer';

function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <Fragment>
      <Router>
        <Navbar className="navbar" color="dark" dark expand="md">
          <NavbarBrand href="/">Laporan PNS</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/about/">Tentang</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Help/">Bantuan</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Route exact path="/" component={ InputFields } />
        <Route path="/about/" component={ About } />
        <Route path="/help/" component={ Help } />
      </Router>
      <Footer/>
    </Fragment>
  )
}

export default Home;