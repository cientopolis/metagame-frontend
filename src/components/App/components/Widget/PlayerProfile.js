import React,{Component} from 'react'
import Box from './Box'
import ProfileImage from './PlayerProfile/ProfileImage'

export default class PlayerProfile extends Component{

  render() {
      //console.log(this.props.player);
      const badges = this.props.player.badges.map((badge) =>
          <div className="col-md-2" key={badge.id} >
            <img src={badge.image} className="img-responsive"/>
            <div className="text-center">{badge.description}</div>
          </div>
      );
    return(
      <Box sizeBox="12" colorBox="primary" title="Player information" extraClass="box-profile">
        <ProfileImage email={this.props.player.email} />
        <h3 className="profile-username text-center">
          {this.props.player.email} <span className="label label-success">{this.props.player.profile}</span>
        </h3>
        <div className="row">
          <div className=" col-md-offset-5 col-md-2">
            <a className="btn btn-primary btn-block"><b>Rank {this.props.player.rank}</b></a>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col center-block">
            <Box sizeBox="12" colorBox="success" title="Insignias obtenidas" extraClass="box-solid">
              {badges}
            </Box>
          </div>
        </div>
      </Box>

    );
  }


}
