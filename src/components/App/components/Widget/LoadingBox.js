import React, {Component} from 'react'
import BoxHeader from './Box/BoxHeader'
import BoxBody from './Box/BoxBody'

class LoadingBox extends Component{

  render(){
    return (
      <div className={"col-md-"+this.props.sizeBox}>
        <div className={"box box-" + this.props.colorBox +" "+this.props.extraClass }>
          <BoxHeader title={this.props.title}/>
          <BoxBody/>
          <div className="overlay"><i className="fa fa-refresh fa-spin"/></div>
        </div>
      </div>
    );
  }
}

export default LoadingBox;

