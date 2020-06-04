import React, { useContext, useState } from "react";
import "../App.css";
import SpotifyContext from "../SpotifyContext";
import Modal from "./Modal";

const TracksTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [trackId, setTrackId] = useState(null);
  const spotifyData = useContext(SpotifyContext);
  let { streamingHistory } = spotifyData;

  const handleShowAndTrackId = (e) => {
    setTrackId(e.currentTarget.getAttribute("data-id"));
    setShowModal(true);
  };

  let top100Tracks = streamingHistory.slice(0, 100);

  return (
    <div className="container">
      <h2 className="text-center text-light mt-3 top-100">Top 100 Tracks</h2>
      {showModal ? (
        <Modal top100Tracks={top100Tracks} trackId={parseInt(trackId)} />
      ) : (
        ""
      )}
      <table className="table table-hover table-dark mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Song</th>
            <th scope="col">Artist</th>
            <th scope="col">Streams</th>
          </tr>
        </thead>

        <tbody>
          {top100Tracks.map((track, index) => {
            return (
              <tr
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={handleShowAndTrackId}
                key={index}
                data-id={index}
              >
                <th scope="row">{index + 1}</th>
                <td>{track[0].trackName}</td>
                <td>{track[0].artistName}</td>
                <td>{track.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TracksTable;
