import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default class Player extends Component {
  render() {
    return (
      <div>
        <AudioPlayer
          autoPlay
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          onPlay={e => console.log("onPlay")}
        />
      </div>
    );
  }
}
