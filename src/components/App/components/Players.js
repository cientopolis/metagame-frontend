import React,{Component} from 'react'
import client from '../../../services/client'
import LoadingBox from './Widget/LoadingBox'
import PlayerProfile from './Widget/PlayerProfile'

export default class Players extends Component {


  constructor(props) {
    super(props);
    this.state={player:null};
  }

  updatePlayerInfo(player){
    client.getPlayerInfo(player).then(data =>{
      this.setState(data);
    });
  }

  componentWillMount() {
    const player  = this.props.match.params.player;
    this.updatePlayerInfo(player);
  }


  componentWillReceiveProps(nextProps) {
    const player  = nextProps.match.params.player;
    this.updatePlayerInfo(player);
  }


  componentWillUnmount() {
    this.setState({player:null});
  }

  render(){
    //Still not found player.
    if (this.state.player == null)
      return(<LoadingBox/>);
    //Player not found
    else if(Object.keys(this.state.player).length === 0)
      return (<h1><img src="http://cultofthepartyparrot.com/parrots/hd/parrot.gif"/>Player Not found.</h1>);
    //Player found
    else
      return (<PlayerProfile player={this.state.player}/>);
  }

}
