import React,{Component} from 'react'

class SearchPlayer extends Component{

  // getRef(ref){
  //   this.emailRef = ref;
  // }

  handleSubmit(){
    //var email = this.emailRef.value;
    //console.log(email);
    //this.emailRef.value = '';
    //this.history.pushState(null, "//profile/" + username)
  }

  render() {
    return(
      <form action="#" method="get" className="sidebar-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search Player..." ref={this.getRef}/>
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <i className="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>

      );
  }
}

export default SearchPlayer;
