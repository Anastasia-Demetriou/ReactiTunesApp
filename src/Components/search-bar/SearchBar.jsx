import React, { Component } from 'react';

//event.target.value 
//onChange: fires when there's a chnage in any of the forms input elements (on each keystroke)
//onSubmit: fires when the form is submitted (usually by pressing enter)

class SearchBar extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            song: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange ({ target }) {
        this.setState({
            song: event.target.value
        })
        
    }

    handleSubmit(event){
        this.props.setState ({
            song: event.target.value
        })
        const { song } = this.state;
        const { onSong } = this.props;
       event.preventDefault();

       // Ensure onSong fun is defined
       if(typeof onSong === 'undefined') return;

        onSong(song);

       this.setState({ song: '' });
       
    }

    render() {
        const { song } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>

                <input 
                    value={this.state.song}
                    type="text" 
                    placeholder="Search" 
                    className="form-control form-search"
                    onChange={this.handleChange}
                />

            </form>
            
        ); 
    }

}

export default SearchBar;