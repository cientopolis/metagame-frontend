import React,{Component} from 'react'
import Router from 'react-router-dom'

class SearchPlayer extends Component{

  constructor(props) {
    super(props);
    this.state= { email:''};
  }

  handleChange(event){
    this.setState({email: event.target.value});
  }

  handleSubmit(){
    //var email = this.state.email;
    //console.log(email);
    //this.email.value = '';
    //this.history.push("//players/" + "santiagopravi")
  }

  render() {
    return(
      <form  action={"/#/players/"+this.state.email} method="get" className="sidebar-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="input-group">
          <input type="text" className="form-control"
              value={this.state.email} placeholder="Search Player..." onChange={this.handleChange.bind(this)} />
              <span className="input-group-btn">
                <button type="submit" id="search-btn" className="btn btn-flat">
                  <i className="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>

      );
  }
}

export default SearchPlayer;
