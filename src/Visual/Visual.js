import React, { Component } from 'react';
import './Visual.css';

class Visual extends Component {
  constructor(props){
    super();
    this.text = props.text;
    this.state = {};
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  componentWillReceiveProps(props){
      this.text = props.text;
  }
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (

      <div>
          <h1>value : {this.text}</h1>
          </div>
    );
  }
}

export default Visual;
