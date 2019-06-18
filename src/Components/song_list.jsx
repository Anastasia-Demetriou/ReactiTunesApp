
import React, { Component } from 'react';

class SongList extends Component {
    constructor(props){
        super(props);

        this.state = {
            clicked: false

        };
    }

    handleClick() { 
        console.log('clicked');


    }

    render (){
        return(
            <div className="song-list">
                {this.props.songs.map(song => {
                    return <Songs key={song.id} id={song.id}  selectedSong={props}/>
                })}
            
            <div className={ this.state.clicked ? 'selected-song' : null}
            onClick={this.handleClick}>
            <div>  
                
            </div>

            </div>
            </div>
        )
    }
}

export default SongList;
