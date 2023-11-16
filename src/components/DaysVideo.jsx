import React from "react";
import YouTube from "react-youtube";

class DaysVideo extends React.Component {
  render() {
    // TODO: NEED TO FIGURE OUT HOW TO HAVE PLAYER RESIZE
    const opts = {
      height: "505",
      width: "853",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 1,
        disablekb: 0,
      },
    };

    return (
      <YouTube
        className=""
        videoId="oKqAblcwFOA"
        opts={opts}
        onReady={this._onReady}
        id="video"
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default DaysVideo;
