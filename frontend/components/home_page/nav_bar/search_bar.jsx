import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search:""
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        handleSearch(e){
            this.setState({search : e.target.value})
        }

        handleSubmit(){
            e.preventDefault();
        }

      
    render(){
        return (
            <div className='search-bar'>
                 <form onSubmit={this.handleSubmit} className='search-bar-form'>
            <input className='search-bar-input'
                   type='text'
                   placeholder='Search'
                   value={this.state.search}
                   onChange={this.handleSearch} />
                     <button className='search-bar-button'> <img src={window.search_button_iconURL} className='search-bar-image' /> </button>
                     </form>   


            </div>
        )
    }
}
export default SearchBar;
