import React, {Component} from 'react';
import './Header.css';
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import Navbar from "react-bootstrap/es/Navbar";
import NavDropdown from "react-bootstrap/es/NavDropdown";
import MenuItem from "react-bootstrap/es/MenuItem";
import NavLink from "react-router-dom/es/NavLink";
import {Link} from 'react-router-dom';

class Header extends Component {
  // constructor(props){
    // super();
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

    render() {
    return (

        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/" >BookMerge</NavLink>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem componentClass={Link} href="/read" to="/read">Read</NavItem>
                <NavItem componentClass={Link} href="/edit" to="/edit">Edit</NavItem>
                <NavItem componentClass={Link} href="/book" to="/book">Book</NavItem>
                <NavItem eventKey={2} href="#">Link
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>

    );
  }

}

export default Header;
