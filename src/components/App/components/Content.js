import React,{Component} from 'react'
import NumberWidget from './Widget/NumberWidget'
import GraphWidget from './Widget/GraphWidget'

import client from '../../../services/client'

export default class Content extends Component{

  constructor(props) {
    super(props);

    this.state = {
      total_players: 0
    };
  }

  componentDidMount() {
    //We set the total of players using a Client.
    client.totalPlayers().then(data => {
      this.setState({total_players: data.total_players})
    });

  }

  render() {
    return (
        <div className="content-wrapper">
          <section className="content">
            <h1>Welcome to Metagame!</h1>
            <NumberWidget title="Total of Players"
                    number={this.state.total_players}
                    color="green"
                    icon="user" />
            <GraphWidget title="Player's distribution"/>

          </section>
        </div>
    );
  }
}

