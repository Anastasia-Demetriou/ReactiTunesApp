import React, { Component } from 'react';

class Song extends Component {
  handleClick = () => {
    if (this.props.selectSong) {
      this.props.selectSong(this.props.id);
    }
  }

  render() {
    const src = `https://music.apple.com/us/album/rolling-in-the-deep/?i=420075084&uo=4
    
    https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="Song" onClick={this.handleClick} />
    );
  }
}

export default Gif;