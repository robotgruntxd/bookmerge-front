import React, {Component} from 'react';
import './App.css';
import Sidebar from "./Sidebar/Sidebar";
import Page from "./Page/Page";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Book from "./Book/Book";

class App extends Component {
  render() {
    return (

        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/book" component={Book} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}


export default App;
