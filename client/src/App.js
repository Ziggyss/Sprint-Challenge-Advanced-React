import React from "react";
import "./App.css";
import Axios from "axios";

const playerApi = "http://localhost:5000/api/players";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    Axios.get(playerApi)
      .then(response => {
        this.setState({ players: response.data });
        console.log(response.data);
      })

      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="App">
        <h1>Players</h1>
      </div>
    );
  }
}

export default App;
