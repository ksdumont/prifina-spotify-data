import React from "react";

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return (
    minutes + " minutes and " + (seconds < 10 ? "0" : "") + seconds + " seconds"
  );
}

const Modal = (props) => {
  let { trackId, top100Tracks } = props;

  let totalTime = top100Tracks[trackId].reduce((acc, curr) => {
    return acc + curr.msPlayed;
  }, 0);

  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {top100Tracks[trackId][0].trackName +
                " by " +
                top100Tracks[trackId][0].artistName}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            You spent {millisToMinutesAndSeconds(totalTime)} listening to this
            song.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
