import React, {Component} from 'react';
import './Reader.css';
import Leaf from "../Leaf/Leaf";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Sidebar from "../Sidebar/Sidebar";
import {Button, Pager} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Reader extends Component {
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
      <div>
          <Grid>
              <Row className="show-grid">
                  <Col xs={4} md={4}>
                      {/*<code>{'<Col xs={12} md={8} />'};</code>*/}
                      <Sidebar/>
                  </Col>
                  <Col xs={8} md={8}>
                      <Row className="show-grid">
                      <Pager>
                          <Pager.Item href="#">Previous</Pager.Item>{' '}
                          <Pager.Item href="#">Next</Pager.Item>
                      </Pager>
                      <NavLink to="/edit" ><Button >edit</Button></NavLink>
                      </Row>
                      <Leaf/>
                      <Pager>
                          <Pager.Item href="#">Previous</Pager.Item>{' '}
                          <Pager.Item href="#">Next</Pager.Item>
                      </Pager>
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default Reader;
