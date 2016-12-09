import React from 'react'
import YouTube from 'react-youtube';

const opts = {
  playerVars: { // https://developers.google.com/youtube/player_parameters
    // autoplay: 1
  }
};

const UIVideo = ({ id, children }) => {
  return (
    <div className="ui segment">
      <div className="ui embed">
        <YouTube
          videoId={id}
          opts={opts}
          />
      </div>
      {children}
    </div>
  )
}

export default UIVideo
