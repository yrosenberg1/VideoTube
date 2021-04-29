import React from 'react';

import StudioNavBarContainer from './studio_navbar_container';
import StudioSideContainer from './studio_side_container';
import StudioMainContainer from './studio_main_container';
import UploadVideoModal from './upload_video_modal';
import StudioChannelCommentsContainer from './studio_channel_comments_container';

class StudioManager extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            component: "Content"
        }
     this.handleToggle = this.handleToggle.bind(this);
    };

    handleToggle(component){
       
            this.setState({component:component})
    
   }
    
    componentDidMount(){
        
        document.body.classList.add('modal-open-scroll');
            
            
        }

    componentWillUnmount(){
            document.body.classList.remove('modal-open-scroll');
        }
           
    
    render(){
        
        
        return (
            <div>
                <StudioNavBarContainer />
                <div className='side-main-container'>
                    <StudioSideContainer buttonSwitch={this.handleToggle} />
                { this.state.component === "Content" ? <StudioMainContainer /> : <StudioChannelCommentsContainer /> }
                </div>
                
                <UploadVideoModal />
               
            </div>
        )
    }
}

export default StudioManager;