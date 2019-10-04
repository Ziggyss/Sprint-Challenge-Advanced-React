import React from "react";
import "./App.css";
import axios from "axios";
import PlayersList from "./components/PlayersList";
import Navbar from "./components/Navbar";

const playerApi = "http://localhost:5000/api/players";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get(playerApi)
      .then(response => {
        this.setState({ players: response.data });
      })

      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Players</h1>
        <PlayersList players={this.state.players} />
      </div>
    );
  }
}

export default App;
