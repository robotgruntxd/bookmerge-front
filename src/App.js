import React, {Component} from 'react';
import './App.css';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Book from "./Book/Book";
import Editor from "./Editor/Editor";
import Reader from "./Reader/Reader";

class App extends Component {
  render() {
    return (

        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/read" component={Reader} />
                    <Route path="/book" component={Book} />

                    <Route path="/edit" component={Editor} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}


export default App;
