import React, { Component } from "react";
import "./App.css";
import SpotifyContext from "./SpotifyContext";

import myName from "./MySpotifyData/FamilyPlan.json";
import streamingHistory0 from "./MySpotifyData/StreamingHistory0.json";
import streamingHistory1 from "./MySpotifyData/StreamingHistory1.json";
import Nav from "./Components/Nav";
import TracksTable from "./Components/TracksTable";

const combineStreamingHistoryFiles = (file1, file2) => {
  return [...file1, file2];
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: myName.address.real_name.split(" ").slice(0, 1).join(),
      streamingHistory: [],
      showTable: false,
    };
  }

  componentDidMount() {
    const streamingHistory = combineStreamingHistoryFiles(
      streamingHistory0,
      streamingHistory1
    );

    let aggregatedTracks = {};

    streamingHistory.map((track) => {
      if (!aggregatedTracks[track.trackName + "-" + track.artistName]) {
        aggregatedTracks[track.trackName + "-" + track.artistName] = [track];
      } else {
        aggregatedTracks[track.trackName + "-" + track.artistName].push(track);
      }
    });
    let sortedTracks = Object.values(aggregatedTracks).sort(
      (a, b) => b.length - a.length
    );

    this.setState({
      streamingHistory: sortedTracks,
    });
  }

  handleClick = () => {
    this.setState({
      showTable: !this.state.showTable,
    });
  };

  render() {
    return (
      <SpotifyContext.Provider value={this.state}>
        <div className="App container">
          <Nav />
          <h1 className="text-center primary-text mt-3">
            Welcome {this.state.name}
          </h1>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg btn-block mt-3"
            onClick={this.handleClick}
          >
            Click here to get Your Spotify Data
          </button>
          {this.state.showTable ? <TracksTable /> : ""}
        </div>
      </SpotifyContext.Provider>
    );
  }
}

export default App;
