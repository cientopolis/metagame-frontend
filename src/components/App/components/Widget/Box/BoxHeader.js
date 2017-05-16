import React, {Component} from 'react'

class BoxHeader extends Component{

  render(){
    return(
          <div className="box-header with-border">
            <h3 className="box-title">{this.props.title}</h3>
            <div className="box-tools pull-right">
              <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
              </button>
              <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
            </div>
          </div>
      );
  }
}

export default BoxHeader;
