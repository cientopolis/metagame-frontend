import React,{Component} from 'react'
import NumberWidget from './Widget/NumberWidget'
import GraphWidget from './Widget/GraphWidget'

import client from '../../../services/client'

export default class Monitor extends Component{

  constructor(props) {
    super(props);

    this.state = {
      total_players: 0,
      daily_activity: {},
      players_distribution:[]
    };

    client.dailyActivity().then(data =>{
      this.setState({daily_activity: data.daily_activity});
    });

    client.totalPlayers().then(data => {
      this.setState(data)
    });

    client.playersDistribution().then(data => {
      this.setState({players_distribution: Object.values(data.players_distribution)});
    });

  }

  componentDidMount() {
    //We set the total of players using a Client.

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

    const daily_act_data = {
      labels: Object.keys(this.state.daily_activity).map((date) => date.toString()),
      datasets: [{
        data: Object.values(this.state.daily_activity),
        label: "Number of obtained badges",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
      }]
    };

    return (
      <div>
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
              colorBox="primary"
              title="Players' distribution"
              data={players_dist_data}
              chart="Doughnut" />

            <GraphWidget
              colorBox="success"
              title="Players' daily activity"
              data={daily_act_data}
              chart="Line" />
            </div>
      </div>
    );
  }
}

