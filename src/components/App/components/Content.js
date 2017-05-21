import React,{Component} from 'react'

export default class Content extends Component{

  render() {
    return(
      <div className="content-wrapper">
        <section className="content">
          <center><h1>Welcome to Metagame!</h1></center>
          {this.props.children}
        </section>
      </div>
    );
  }

}
