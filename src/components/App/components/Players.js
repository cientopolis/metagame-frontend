import React,{Component} from 'react'
import client from '../../../services/client'
import LoadingBox from './Widget/LoadingBox'
import PlayerProfile from './Widget/PlayerProfile'

export default class Players extends Component {

  constructor(props) {
    super(props);
    this.state={player:null};
  }

  componentDidMount() {
    const player  = this.props.match.params.player;
    client.getPlayerInfo(player).then(data =>{
      this.setState(data);
    });
  }


  render(){
    //const query = this.props.location;
    //const date = query.search;
    //const player  = this.props.match.params.player;
    if (this.state.player == null)
      return(<LoadingBox/>);
    else
      return (<PlayerProfile player={this.state.player}/>);
  }

}

//<ProfileImage email={this.state.player.email}/>
