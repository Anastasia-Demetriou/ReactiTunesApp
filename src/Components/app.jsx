import React, { Component } from 'react';
import SearchBar from './search-bar/SearchBar.jsx';
import SongList from './song_list.jsx';
import SongRow from './song_row.jsx';


class App extends Component {
    constructor (props){
        super (props)
// this is where the state will change in the lifetime of the application (search, songs, selected songs)
        this.state = {
            songs: [], 
            selectedSongId: "",
            search: ""
        }
        this.search()
        //this.search = this.search.bind(this);
    }

        search (searchKey){
            console.log(this.props.songs)
            //fetch(`https://itunes.apple.com/search?term=jack+johnson`)
            return fetch(` https://itunes.apple.com/lookup?=${searchKey}`)
         
                .then(response => response.json() )
                .then(response =>{ 
                    return response;
                .catch(error => {
                    console.log(error);
                });
                //.then( ({song: search, media: musicTrack}) => this.setState({selectedSondId}))

            //fetch ('https://itunes.apple.com/search')
           // .then (response => response.json() )
            //.then( ({song: search, media: musicTrack}) => this.setState({song}))
        }
        
        selectedSong(id) {
            this.setState({
                selectedSondId: id

            });
        }


    render() {
        console.log("TESTING RENDER");
        return (
            <div>
                <div className="left-scene">
                    <SearchBar 
                        handleSubmit={this.state.search}
                        onChange={ e => this.handleSubmit(e)}
                        handleChange={this.state.search}
                        onSong={searchKey => {
                        this.search(searchKey)
                    } 

                }/>
                <SongList songs={this.state.songs} selectedSong={this.state.selectedSong} id={this.state.selectedSongId}/>
                <SongRow songs={this.state.songs} selectedSong={this.selectedSong} />
                </div>
                <div className="right-scene">
                    <div className="selected-song">

                    </div>
                </div>
            </div>
        )

    }
}

export default App;