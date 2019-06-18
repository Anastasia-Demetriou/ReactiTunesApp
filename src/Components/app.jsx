import React from 'react';
import { isPending } from 'q';

 class App extends React.Component {
        
        constructor(props) {
            super(props);
            
            this.state = {
                searchValue: "",
                searchResults: []
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
            const { searchValue } = this.state;

            this.fetchItunesData(searchValue)
                .then(searchResults =>{
                    this.setState({
                        searchValue: "",
                        searchResults,

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
            const { searchResults, searchValue } = this.state;
            const isEmpty = searchResults.length === 0;

            return (
                <div>
                    <input
                        value={searchValue}
                        onChange={this.handleSearch}
                        type="text"
                        placeholder="search itunes"
                    />
                {isEmpty && <h2>Search for an artist</h2>}
                <button onClick={this.onSearch}>Go!</button>
            </div>)
        }
    }

    
    export default App;       
         

            

        

    


