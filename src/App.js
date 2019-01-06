import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import MicroService from './MicroService';
import Kafka from './Kafka';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1> WebTool </h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/micro">MicroService</NavLink></li>
            <li><NavLink to="/kafka">Kafka</NavLink></li>
          </ul>
        <div className="content">
        <Route path="/micro" component={MicroService}/>
        <Route path="/kafka" component={Kafka}/>
        </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
