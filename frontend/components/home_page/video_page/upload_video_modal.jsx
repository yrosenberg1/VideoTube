import React from 'react';
import {closeModal} from '../../../actions/modal_actions';
import {connect} from 'react-redux';


function UploadVideoModal({modal, closeModal}){
    if (!modal){
        return null;
    }
    let component;
    switch (modal) {
        case value:
            
            break;
    
        default:
            break;
    }
}

const mSTP = (state, ownProps) => {
    return {
        modal: state.ui.modal
    }
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mSTP, mDTP)(UploadVideoModal)