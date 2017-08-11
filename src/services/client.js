import axios from "axios";
import {METAGAME_API,METAGAME_TOKEN} from "../config/environment";

//axios.defaults.headers.common['Authorization'] = 'Token token='+METAGAME_TOKEN;
//axios.defaults.headers.get['Content-Type'] = 'application/json';

var client = axios.create({
  timeout: 1000,
  headers: {'Authorization': 'Token token='+METAGAME_TOKEN }
});


export default {

  getRequest: function(url){
    return client.get(METAGAME_API+url)
      .then(response => {
        return response.data
    });
  },

  //Total of Players
  totalPlayers: function(){
    return this.getRequest('/statistics/total_players')
  },

  oneTimeVisitors: function(){
    return this.getRequest('/statistics/one_time_visitors')
  },

  boredomDropouts: function(){
    return this.getRequest('/statistics/boredom_dropouts')
  },

  //Players distribution
  playersDistribution: function(){
    return this.getRequest('/statistics/players_distribution')
  },

  dailyActivity: function(){
    return this.getRequest('/statistics/daily_activity')
  },

  getPlayerInfo(email){
    return this.getRequest('/player_info?email=' + email);
  }

}

