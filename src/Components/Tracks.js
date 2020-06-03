import React, { useContext } from "react";
import SpotifyContext from "../SpotifyContext";

const Tracks = () => {
  const spotifyData = useContext(SpotifyContext);
  let { streamingHistory } = spotifyData;
  let aggregatedTracks = {};

  streamingHistory.map((track) => {
    if (!aggregatedTracks[track.trackName + track.artistName]) {
      aggregatedTracks[track.trackName + track.artistName] = [track];
    } else {
      aggregatedTracks[track.trackName + track.artistName].push(track);
    }
  });
  // console.log(aggregatedTracks);
  // console.log("Tracks:", streamingHistory);

  let sortedTracks = Object.values(aggregatedTracks).sort(
    (a, b) => b.length - a.length
  );
  // console.log(sortedTracks);

  let totalTime = Object.values(sortedTracks).slice(0, 100);
  console.log(totalTime);
  return "";
};

export default Tracks;

/*
Input:
{
artistName: "",
endTime: "",
msPlayed: "",
trackname: ""
}

Output: {
  artistName: "",
  trackName: ""
  endTime: [all end times if count > 1],
  msPlayed: [sum of all msPlayed if count > 1] or [all msPlayed if count > 1],
  count: # of times track was played
}


*/
