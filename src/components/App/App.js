import React, { Component } from 'react';
import Header from  './components/Header'
import SideBar from './components/SideBar'
import Content from './components/Content'
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <SideBar/>
        <Content/>
      </div>
    );
  }
}

export default App;


