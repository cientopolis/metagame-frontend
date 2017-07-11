import React, {Component} from 'react'
import md5 from 'md5'

class ProfileImage extends Component{

  constructor(props) {
    super(props);
    this.state={src:''}
  }

  render(){
    const src = "https://www.gravatar.com/avatar/" + md5(this.props.email)
    return(
          <img className="profile-user-img img-responsive img-circle" src={src}/>
      );
  }


}

export default ProfileImage;
