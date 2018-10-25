import React, {Component} from 'react';
import './Book.css';

class Book extends Component {

  constructor(props){
    super();
    this.state = {};
  }

  // componentWillMount(){}
  // componentDidMount(){
  //     const height = document.getElementById('container').clientHeight;
  //     this.setState({ height });
  // }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

    createListOfStrings() {
        return ["sdf","sdff2"].map(function(item, i){
            return <div className="page">
                <div className="subpage" >
                <p>{item}</p>
            </div>
            </div>
        });

    }


  render() {
    return (

            <div className="book">

                    {this.createListOfStrings()}


            </div>

    );
  }
}

export default Book;
