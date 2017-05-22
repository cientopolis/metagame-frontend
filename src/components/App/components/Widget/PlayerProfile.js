import React,{Component} from 'react'
import Box from './Box'
import ProfileImage from './PlayerProfile/ProfileImage'

export default class PlayerProfile extends Component{

  render() {

    return(
      <Box sizeBox="10" colorBox="primary" title="Player information" extraClass="box-profile">
        <ProfileImage email={this.props.player.email}/>
        <h3 className="profile-username text-center">{this.props.player.email}</h3>
      </Box>

    );
  }

}
