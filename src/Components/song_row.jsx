import React, { Component } from 'react';

class SongRow extends Component {
    handleSubmit() {
        if (this.props.selectSong) {
            this.props.selectSong(this.props.id);
        }
    }

    SongRow () {
        
    }

    render () {
        
const { id } = this.props;
        if (!id) {
            return null;
            console.log(id)
        }
    }
}

export default SongRow;