import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            searchValue: "",
            searchResults: [],
            resultsFound: true,
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.fetchItunesData = this.fetchItunesData.bind(this);
  
    }

    handleSearch({ target }) {
        this.setState({
          searchValue: target.value  

        })

    }

    onSearch() {
        const { searchValue, searchResults } = this.state;

        this.fetchItunesData(searchValue)
            .then(response => {
                this.setState({
                    searchValue: "",
                    searchResults: response.results,
                    resultsFound: response.results.length,
                })
        })
    }
    
    fetchItunesData(searchValue){
        const newSearchValue = searchValue.replace('', '+')
        return fetch(`https://itunes.apple.com/search?term=${newSearchValue}`)
        .then ( response =>  response.json())
        .catch (error=>{
            console.error(error);
        });
        
    }

    render(){ 
        const {searchResults, searchValue, resultsFound}  = this.state;
      

        console.log(searchResults);
        const resultItems = searchResults.map(results=> { 
            return <li 
                key={results.trackId}>
                    {results.trackName}
                    {results.artistName}
                    {results.collectionName}
                    <img src={results.artworkUrl60} />
                    </li>
        });
        
        // console.log(searchResults)
        return (
            <div>
                <input
                    value={searchValue}
                    onChange={this.handleSearch}
                    type="text"
                    placeholder="search itunes"
                    className="form-control form-search"
                />
            

                {/* display list of artist  */}
            <button onClick={this.onSearch}>Go!</button>
            <ul>{resultItems}</ul>
            {!resultsFound && <h2>Results not found, search again</h2>}
        </div>)
    }
}


export default Search;       
     
