import React, { Component } from 'react';
import Header from  './components/Header'
import SideBar from './components/SideBar'
import Content from './components/Content'

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'


import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <SideBar/>
        <Router>
          <div>
            <Route path="/" component={Content}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


