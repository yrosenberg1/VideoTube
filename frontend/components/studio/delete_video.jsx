import React from 'react';


class DeleteVideo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            modal: this.props.modal,
            confirmDelete: false
        }
        this.closeModal = this.closeModal.bind(this);
        this.deleteVideo = this.deleteVideo.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }


    closeModal(){
        this.setState({modal: null})
        this.props.deleteOn()
    }

    deleteVideo(){
        if (this.state.confirmDelete){
        this.props.deleteVideo(this.props.video.id).then(this.closeModal())
        }
    }

    confirmDelete(e){
        
     if (e.currentTarget.checked){
        this.setState({confirmDelete: true})
     } else {
        this.setState({confirmDelete: false}) 
     }
    }

    render(){
        if (!this.state.modal){ return null;}
    let {video} = this.props


        return (
            <div className='modal-background' onClick={this.closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
        <div className='delete-video-container'>
            <div className='delete-modal-header'><p>Permanently delete this video?</p></div>
            <div className='delete-video-info-container'>
                <div className='delete-video-main-container'>
            <div className='delete-video-thumbnail-container'><img src={window.youtube_one} /></div>
            <div className='delete-vid-info'>
                <li>{video.title}</li>
                <li>published {video.timestamp} ago</li>
                <li>{video.views} views</li>
            </div>
            </div>
            <div className='checkbox-container'>
            <input onClick={this.confirmDelete} type="checkbox" id="confirm-del" name="confirm-del"></input>  <p>I understand that deleting is permanent and can't be undone.</p>
            </div>
            </div>
            

            <div className='delete-modal-buttons-container'>
                <button className='delete-modal-cancel-btn' onClick={this.closeModal}>Cancel</button>
                <button className={this.state.confirmDelete ? 'delete-modal-btn-active' : 'delete-modal-delete-btn-inactive'} onClick={this.deleteVideo}>Delete Forever</button>
            </div>
        </div>
        </div>
        </div>
              
         ) 
        }
}


export default DeleteVideo;