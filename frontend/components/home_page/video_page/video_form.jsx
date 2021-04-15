import React from 'react';
// import StudioNavBar from ''
import StudioNavBarContainer from '../../studio/studio_navbar_container';
import StudioSideContainer from '../../studio/studio_side_container';
import StudioMainContainer from '../../studio/studio_main_container';

class VideoForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
                
                title: "",
                description: ""
                

            }
        

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        const newVideo = {
            uploader_id: this.props.userId,
            title: this.state.title,
            description: this.state.description,
            views: 0


        }
        this.props.uploadVideo(newVideo)
    };

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
        
    };

    render(){
        return (
            <div>
                <StudioNavBarContainer />
                <div className='side-main-container'>
                    <StudioSideContainer />
                    <StudioMainContainer />
                </div>
                <p>VideoForm.jsx</p>
                <form onSubmit={this.handleSubmit}>
                    
                        <input
                            type='text'
                            value={this.state.title}
                            onChange={this.update('title')}></input>
                           
                    
                       
                       <textarea
                            value={this.state.description}
                            onChange={this.update('description')}></textarea>
                           
                            
                 
                  <button type='submit' value={this.props.formType}>Submit</button>
                            
                </form>
            </div>
        )
    }
}

export default VideoForm;