import React, {Component} from 'react'
import client from '../../../../services/client'

class ProfileImage extends Component{

  componentDidMount() {
    // client.getProfileImage(this.state.player.email).then(data=>{
    //   this.setState({image});
    // });
  }
  render(){
    return(
          <img className="profile-user-img img-responsive img-circle"
          src="https://www.gravatar.com/avatar/8ba421a47eee26e8bf77b7a4651b41a7"/>
      );
  }
}

export default ProfileImage;
