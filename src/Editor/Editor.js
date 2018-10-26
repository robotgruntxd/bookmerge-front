import React, {Component} from 'react';
import './Editor.css';
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Sidebar from "../Sidebar/Sidebar";
import Writer from "../Writer/Writer";

class Editor extends Component {
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
                      <Writer/>
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default Editor;
