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

  //Players distribution
  playersDistribution: function(){
    return this.getRequest('/statistics/players_distribution')
  }


}

