import React from "react";
import Player from "./Player";

class PlayersList extends React.Component {
  render() {
    if (this.props.players.length === 0) {
      return "Loading the info";
    } else {
      return (
        <div>
          <div>
            {this.props.players.map(player => (
              <Player
                key={player.id}
                player={player}
                name={player.name}
                country={player.country}
                searches={player.searches}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default PlayersList;
