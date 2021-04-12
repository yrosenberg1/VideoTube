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
            console.log(this.state.search)
        }

        handleSubmit(e){
            e.preventDefault();
            console.log('click search button')
            this.props.fetchSearchVideos(this.state.search)
            this.setState({search : ""})
        }

      
    render(){
        return (
            <div>
                 <form onSubmit={this.handleSubmit} className='search-bar-form'>
            <input className='search-bar-input'
                   type='text'
                   placeholder='Search'
                   value={this.state.search}
                   onChange={this.handleSearch} />
                     <button className='search-bar-button'> <i className="fas fa-search"></i> </button>
                     </form>   


            </div>
        )
    }
}
export default SearchBar;
