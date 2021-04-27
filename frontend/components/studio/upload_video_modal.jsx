import React from 'react';

import UploadVideoContainer from './upload_video_container';
import SelectVideoContainer from './select_file_container';
import DeleteVideoContainer from './delete_video_container';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';


function UploadVideoModal({modal, closeModal, video}){
    
    if (!modal){
        
        return null;
    }

    
    
    let component;
    
    switch (modal) {
        case "modal":
            
            component = <SelectVideoContainer />;
            break;
        case 'uploadVideo':
            
             component = <UploadVideoContainer  video={video} />;    
            break;

            case "deleteVideo":
                
                component = <DeleteVideoContainer />
                break
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
    
    return {
        modal: ownProps.video ? ownProps.modal : state.ui.modal, 
        // modal: state.ui.modal,
        video: ownProps.video
    }
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mSTP, mDTP)(UploadVideoModal);