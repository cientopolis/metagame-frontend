import React, {Component} from 'react'
import axios from 'axios'

export default class Widget extends Component{
 constructor(){
    super();
    this.state = {
      number: 0
    };
  }

  componentWillMount(){
    // Called the first time the component is loaded right before the component is added to the page
  }


  componentDidMount(){
    // Called after the component has been rendered into the page
    axios.get('http://localhost:5000/statistics/total_players')
    .then(response => {
        this.setState({number: response.data['total_players']})
    });
  }

  componentWillReceiveProps(nextProps){
    // Called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState){
    // Called when the props and/or state change
  }

  componentWillUnmount(){
    // Called when the component is removed
  }


  render(){
    return(
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-green"><i className="fa fa-user"></i></span>
            <div className="info-box-content">
              <span className="info-box-text">{this.props.text}</span>
              <span className="info-box-number">{this.state.number}</span>
            </div>
          </div>
        </div>
      );
  }

}
