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

    client.playersDistribution().then(data => {
      this.setState({players_distribution: Object.values(data.players_distribution)});
    } );

  }

  render() {

    const players_dist_data = {
      labels: ['Visitors','Explorers','Citizen Scientists','Prolific CS','Commited CS','Visionaries'],
      datasets: [{
        data: this.state.players_distribution,
        backgroundColor:      ['#FF6384','#36A2EB','#FFCE56','#71F442','#41F4DF','#C132FF'],
        hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56','#71F442','#41F4DF','#C132FF']
      }]
    };


    return (
        <div className="content-wrapper">
          <section className="content">
            <center><h1>Welcome to Metagame!</h1></center>
            <div className="row">
            <NumberWidget title="Total of Players"
                    number={this.state.total_players}
                    color="green"
                    icon="users" />
            <NumberWidget title="Boredom dropouts"
                    number={this.state.total_players}
                    color="red"
                    icon="user-times" />
            <NumberWidget title="One time visitors"
                    number={this.state.total_players}
                    color="black"
                    icon="clock-o" />
            <GraphWidget
              title="Player's distribution"
              data={players_dist_data}
              chart="Doughnut" />
            <GraphWidget
              title="Player's distribution"
              data={players_dist_data}
              chart="Line" />
            </div>


          </section>
        </div>
    );
  }
}

