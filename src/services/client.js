import axios from "axios";

const METAGAME_API = "http://localhost:5000";

export default {

  getRequest: function(url){
    return axios.get(METAGAME_API+url)
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

