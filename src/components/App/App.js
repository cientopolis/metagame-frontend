import React, { Component } from 'react';
import Header from  './components/Header'
import SideBar from './components/SideBar'
import Content from './components/Content'
import Monitor from './components/Monitor'
import Players from './components/Players'

import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <SideBar/>
        <Router>
          <div className="content-wrapper">
            <section className="content">
              <Switch>
                <Route exact path="/" component={Content}/>
                <Route path="/monitor" component={Monitor}/>
                <Route path="/players/:player" component={Players}/>
              </Switch>
            </section>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


