import axios from "axios";

const METAGAME_API = "http://localhost:5000";

export default {

  totalPlayers: function(){
    return axios.get(METAGAME_API+'/statistics/total_players')
      .then(response => {
        return {total_players: response.data.total_players}
    });
  }


}

