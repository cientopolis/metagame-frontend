import React, {Component} from 'react'
import BoxHeader from './Box/BoxHeader'
import BoxBody from './Box/BoxBody'

class Box extends Component{

  render(){
    return(
      <div className="col-md-6">
        <div className={"box box-"+this.props.colorBox}>
          <BoxHeader title={this.props.title}/>
          <BoxBody>
            {this.props.children}
          </BoxBody>
        </div>
      </div>
      );
  }
}

export default Box;
