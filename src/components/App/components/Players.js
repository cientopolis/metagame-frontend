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

  componentDidMount() {
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
    //const query = this.props.location;
    //const date = query.search;
    //const player  = this.props.match.params.player;
    if (this.state.player == null)
      return(<LoadingBox/>);
    else
      return (<PlayerProfile player={this.state.player}/>);
  }

}
