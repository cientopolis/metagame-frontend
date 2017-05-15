import React,{Component} from 'react'

export default class Menu extends Component{

  render(){
    return (
      <ul className="sidebar-menu">
        <li className="header">Menu</li>
        <li className="active">
          <a href="#"><i className="fa fa-user"></i> <span>Players info</span></a>
        </li>
      </ul>
    );
  }
}
