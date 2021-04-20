import React from 'react';

import UploadVideoContainer from './upload_video_container';
import SelectVideoContainer from './select_file_container';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';


function UploadVideoModal({modal, closeModal, videoInfo}){
    debugger
    if (!modal){
        
        return null;
    }

    
    
    let component;
    
    switch (modal) {
        case "modal":
            
            component = <SelectVideoContainer />;
            break;
        case 'uploadVideo':
            
             component = <UploadVideoContainer  video={videoInfo} />;    
            break;
            
    
        default:
            return null;
    }
    
    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>

    )
}

const mSTP = (state, ownProps) => {
    debugger
    return {
        modal: ownProps.video ? ownProps.modal : state.ui.modal, 
        // modal: state.ui.modal,
        videoInfo: ownProps.video
    }
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mSTP, mDTP)(UploadVideoModal);