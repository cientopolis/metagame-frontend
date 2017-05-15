import React,{Component} from 'react';
import Logo from './Header/Logo'
import NavBar from './Header/NavBar'

export default class Header extends Component{

  render() {
    return(
      <header className="main-header">
        <Logo/>
        <NavBar/>
      </header>
    );
  }

}

