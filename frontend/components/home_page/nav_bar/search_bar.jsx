import React from 'react';
import Redirect from 'react-router-dom';
class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search:"",
            videos:{},
            activeDrop: false
        }

        this.form = React.createRef();
        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectVid = this.selectVid.bind(this);
    }

    componentDidMount(){
        this.props.fetchVideos().then(this.setState({videos: this.props.videos}))
    }
    
    showDropdown(e){
        this.setState({activeDrop: true}, () => {
            document.addEventListener('click', this.hideDropdown)
        })
        
    }
    hideDropdown(e){

        if (this.form.current.contains(e.target)) { return
        } else {
            
        this.setState({activeDrop: false}, () => document.removeEventListener('click', this.hideDropdown))
        }
    }

    selectVid(e){
        e.preventDefault();
        
        this.setState({search: ""})
        let videos = Object.values(this.props.videos)
        let video = videos.find(video => video.title === e.target.innerText)
        this.props.history.push(`/videos/${video.id}`)
      
       
    }

    componentWillUnmount(){

        document.removeEventListener('click', this.hideDropdown)
    }

        handleSearch(e){
            this.setState({search : e.target.value})
            (this.state.search)
        }

        handleSubmit(e){
            e.preventDefault();
        
            this.props.fetchSearchVideos(this.state.search)
            .then((this.props.history.push(`/search/${this.state.search}`)))
            .then(this.setState({search : ""}))
    
        }

      
    render(){

        let search = this.state.search
        let videos = Object.values(this.props.videos)
        let titles = videos.map(video => video.title )
        titles = [...new Set(titles)]
       let filteredList = titles.filter( title => title.toLowerCase().startsWith(search.toLowerCase())  )
       let dropdown = filteredList.map((videoTitle,i) => {
           return (
               <button key={i} className='video-title-dropdown-btn' onClick={this.selectVid}>{videoTitle}</button>
           )
       })
        return (
            <div>
                 <form ref={this.form} onFocus={this.showDropdown} onSubmit={this.handleSubmit} className='search-bar-form'>
            <div className='search-bar-form-input-container'>    
            <input className='search-bar-input'
                   type='search'
                   placeholder='Search'
                   value={this.state.search}
                   onChange={this.handleSearch} 
                   />
                   
                 <button className='search-bar-button'> <i className="fas fa-search"></i> </button>
                 </div>  
                  {this.state.activeDrop && filteredList.length > 0 ? <div className='search-bar-dropdown'>
                        {dropdown}
                    </div> : null}
                    </form>  
            </div>
        )
    }
}
export default SearchBar;
