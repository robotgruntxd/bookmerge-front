import React, {Component} from 'react';
import './Writer.css';
import ContentEditable from 'react-contenteditable'
import Button from "react-bootstrap/es/Button";

class Writer extends Component {
    constructor() {
        super()
        this.state = {html: "<p>Alice is sitting with her sister outdoors when she spies a White Rabbit with a" +
            " pocket watch. Fascinated by the sight, she follows the rabbit down the hole. She falls for a long" +
            " time, and finds herself in a long hallway full of doors. </p>",
            textareaVal:"" };
    };

    handleChange = evt => {

        this.setState({html: evt.target.value});

    };

    updateSelection(tag){


        let selected = window.getSelection().toString();

        if (selected.length > 0) {
            let index = this.state.html.indexOf(window.getSelection().toString());

            let iniTag = "<" + tag + ">";
            let endTag =  "</" + tag + ">";

            // console.log("Selected before:" + selected);
            // selected = selected.replace(iniTag,"").replace(endTag,"");
            // console.log("Selected after:" + selected);
            let newHtml = [this.state.html.slice(0, index), iniTag,selected, endTag,this.state.html.slice(index + selected.length)].join('');
            this.setState({html: newHtml});
        }




        // this.setState({textareaVal:window.getSelection().toString()});

        }

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

                <ContentEditable
                    html={this.state.html} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={this.handleChange} // handle innerHTML change
                    tagName='article' // Use a custom HTML tag (uses a div by default)

                />


                <p>
                    {this.state.html}
                </p>

                <Button onClick={() => this.updateSelection("b")} >bold</Button>
                <Button onClick={() => this.updateSelection("em")} >italic</Button>
                <p>selected</p>
                <p>

                    {this.state.textareaVal}
                </p>
            </div>

        );
    }

}

export default Writer;
