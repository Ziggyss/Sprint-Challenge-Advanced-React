import React from "react";

class Player extends React.Component {
  render() {
    console.log("Player props " + this.props);
    return (
      <div key={this.props.id}>
        <h2>Player: {this.props.name}</h2>
        <p>Country: {this.props.country}</p>
        <p>Search Popularity: {this.props.searches}</p>
      </div>
    );
  }
}

export default Player;
