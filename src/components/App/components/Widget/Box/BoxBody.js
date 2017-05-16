import React, {Component} from 'react'

class BoxBody extends Component{

  render(){
    return(
      <div className="box-body">
        <div className="row">
          <div className="col-md-8">
            {this.props.children}
          </div>
        </div>
      </div>
      );
  }
}

export default BoxBody;
