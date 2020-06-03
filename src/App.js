import React, { Component } from "react";
import "./App.css";
import SpotifyContext from "./SpotifyContext";

import myName from "./MySpotifyData/FamilyPlan.json";
import streamingHistory0 from "./MySpotifyData/StreamingHistory0.json";
import streamingHistory1 from "./MySpotifyData/StreamingHistory1.json";
import Nav from "./Components/Nav";
import Tracks from "./Components/Tracks";

const combineStreamingHistoryFiles = (file1, file2) => {
  return [...file1, file2];
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: myName.address.real_name,
      streamingHistory: [],
    };
  }

  componentDidMount() {
    const streamingHistory = combineStreamingHistoryFiles(
      streamingHistory0,
      streamingHistory1
    );

    this.setState({
      streamingHistory,
    });
  }

  render() {
    console.log(this.state);
    return (
      <SpotifyContext.Provider value={this.state}>
        <div className="App container">
          <Nav />
          {/* <h1 className="text-center primary-text mt-3">
            Welcome {this.state.name}
          </h1> */}
          <Tracks />
        </div>
      </SpotifyContext.Provider>
    );
  }
}

export default App;
