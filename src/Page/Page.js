import React, { Component } from 'react';
import './Page.css';
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Thumbnail from "react-bootstrap/es/Thumbnail";
import Button from "react-bootstrap/es/Button";
import NavLink from "react-router-dom/es/NavLink";

class Page extends Component {
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

            <Row>
                <Col xs={6} md={4}>
                    <Thumbnail src="img/alice.jpg" alt="242x200">
                        <h3>Alice in Wonderland</h3>
                        <p>Description</p>
                        <p>
                            <NavLink to="/book" ><Button bsStyle="primary">read</Button></NavLink>

                            &nbsp;
                            <Button bsStyle="default">download</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                    <Thumbnail src="img/hadas.jpg" alt="242x200">
                        <h3>Todas las hadas del reino</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">read</Button>
                            &nbsp;
                            <Button bsStyle="default">download</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                    <Thumbnail src="img/inkgirl.jpg" alt="242x200">
                        <h3>The girl of ink and stars</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">read</Button>
                            &nbsp;
                            <Button bsStyle="default">download</Button>
                        </p>
                    </Thumbnail>
                </Col>
            </Row>


    );
  }
}

export default Page;
