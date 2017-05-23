import React, {Component} from 'react'
import md5 from 'md5'

class ProfileImage extends Component{

  constructor(props) {
    super(props);
    this.state={src:''}
  }

  componentWillMount() {
    this.setState({src:"https://www.gravatar.com/avatar/" + md5(this.props.email)})
  }

  render(){

    return(
          <img className="profile-user-img img-responsive img-circle" src={this.state.src}/>
      );
  }
}

export default ProfileImage;
