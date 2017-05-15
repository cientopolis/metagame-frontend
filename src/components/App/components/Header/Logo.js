import React,{Component} from 'react';

export default class Logo extends Component{

  render() {
    return(
      <a href="index.html" className="logo">
        <span className="logo-mini"><b>M</b>G</span>
        <span className="logo-lg"><b>Meta</b>Game</span>
      </a>
    );
  }

}

