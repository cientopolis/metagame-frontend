import React,{Component} from 'react'
import {HashRouter as Router,Link } from 'react-router-dom'

export default class Menu extends Component{

  render(){
    return (
      <Router>
        <ul className="sidebar-menu">
          <li className="header">Menu</li>
          <li>
            <Link to="/monitor"><i className="fa fa-user"></i><span>Monitor</span></Link>
          </li>
          <li>
            <Link to="/players"><i className="fa fa-users"></i><span>Players' info</span></Link>
          </li>
        </ul>
      </Router>

    );
  }
}
