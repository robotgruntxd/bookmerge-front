import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Page from "./Page/Page";

class App extends Component {
  render() {
    return (
        <Grid>
            <Row className="show-grid">
                <Col xs={4} md={4}>
                    {/*<code>{'<Col xs={12} md={8} />'};</code>*/}
                        <Sidebar/>

                </Col>
                <Col xs={8} md={8}>
                   <Page/>
                </Col>
            </Row>

        </Grid>
    );
  }
}


export default App;
