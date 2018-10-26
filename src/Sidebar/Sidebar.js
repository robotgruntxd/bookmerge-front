import React, {Component} from 'react';
import './Sidebar.css';
import ListGroup from "react-bootstrap/es/ListGroup";
import ListGroupItem from "react-bootstrap/es/ListGroupItem";

function alertClicked() {
    alert('You clicked the third ListGroupItem');
}

class Sidebar extends Component {




  constructor(props){
      super(props);
      this.state = {value: ''};


  }



  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(props){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

    render() {
        return (

            <ListGroup componentClass="ul">
                <ListGroupItem href="#link1">Ciencia</ListGroupItem>
                <ListGroupItem href="#link2">Literatura</ListGroupItem>
                <ListGroupItem onClick={alertClicked}>Historia</ListGroupItem>
            </ListGroup>


        );
    }
}

export default Sidebar;
