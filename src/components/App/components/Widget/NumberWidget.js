import React, {Component} from 'react'
import PropTypes from 'prop-types';

class NumberWidget extends Component{

  constructor(props) {
    super(props);

    this.state = {
      total_players: 0
    };
  }

  componentWillReceiveProps(nextProps){
    // Called when the props provided to the component are changed
    this.setState(nextProps);
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
            <span className={'info-box-icon bg-'+ this.props.color}>
              <i className={'fa fa-'+ this.props.icon}></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">{this.props.title}</span>
              <span className="info-box-number">{this.props.number}</span>
            </div>
          </div>
        </div>
      );
  }

}

/**
* Some Validations
*/
NumberWidget.propTypes = {
  title:  PropTypes.string,
  color:  PropTypes.string,
  icon:   PropTypes.string,
  number: PropTypes.number
}

NumberWidget.defaultProps = {
  icon: "user",
  color: "red",
};

export default NumberWidget;

