import React,{Component} from 'react'
import client from '../../../services/client'
import Box from './Widget/Box'
import ProfileImage from './Widget/ProfileImage'

export default class Players extends Component {

  constructor(props) {
    super(props);
    this.state={
      player: {}
    };
    const player  = this.props.match.params.player;
    client.getPlayerInfo(player).then(data =>{
      this.setState(data);
    });

  }

  render(){
    //const query = this.props.location;
    //const date = query.search;
    //const player  = this.props.match.params.player;
    console.log(this.state.player);
    return (
        <Box sizeBox="10" colorBox="primary" title="Player information" extraClass="box-profile">
          <ProfileImage email={this.state.player.email}/>
          <h3 className="profile-username text-center">{this.state.player.email}</h3>
        </Box>
      );
  }
}

