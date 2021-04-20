import React from 'react';

import StudioNavBarContainer from './studio_navbar_container';
import StudioSideContainer from './studio_side_container';
import StudioMainContainer from './studio_main_container';
import UploadVideoModal from './upload_video_modal';

class StudioManager extends React.Component {

    constructor(props){
        super(props);
      
    };

    
    
    render(){
        
        
        return (
            <div>
                <StudioNavBarContainer />
                <div className='side-main-container'>
                    <StudioSideContainer />
                    <StudioMainContainer />
                </div>
                
                <UploadVideoModal />
               
            </div>
        )
    }
}

export default StudioManager;