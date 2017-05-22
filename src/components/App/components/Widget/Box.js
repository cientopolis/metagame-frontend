import React, {Component} from 'react'
import BoxHeader from './Box/BoxHeader'
import BoxBody from './Box/BoxBody'

class Box extends Component{

  render(){
    return(
      <div className={"col-md-"+this.props.sizeBox}>
        <div className={"box box-" + this.props.colorBox +" "+this.props.extraClass }>
          <BoxHeader title={this.props.title}/>
          <BoxBody>
            {this.props.children}
          </BoxBody>
        </div>
      </div>
      );
  }
}

Box.defaultProps = {
  colorBox: "default",
  sizeBox: "6",
  extraClass:""
};

export default Box;
