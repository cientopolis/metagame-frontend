import React,{Component} from 'react'
import Widget from './Widget/Widget'

export default class Content extends Component{
  render() {
    return (
        <div className="content-wrapper">
          <section className="content">
            <h1>Welcome to Metagame!</h1>
            <Widget text="Total of Players" number="50" />
          </section>
        </div>
    );
  }
}
