import React from 'react';


class DeleteVideo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            modal: this.props.modal
        }
        this.closeModal = this.closeModal.bind(this);
        this.deleteVideo = this.deleteVideo.bind(this);
    }


    closeModal(){
        this.setState({modal: null})
        this.props.deleteOn()
    }

    deleteVideo(){
        debugger
        this.props.deleteVideo(this.props.video.id).then(this.closeModal())
    }

    confirmDelete(e){
        debugger
    }

    render(){
        if (!this.state.modal){ return null;}
    let {video} = this.props

debugger
        return (
            <div className='modal-background' onClick={this.closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
        <div className='delete-video-container'>
            <div className='delete-modal-header'><p>Permanently delete this video?</p></div>
            <div className='delete-video-info-container'>
            <div className='video-thumbnail-container'><img src={window.youtube_one} /></div>
            <div className='delete-vid-info'>
                <li>{video.title}</li>
                <li>published {video.timestamp}</li>
                <li>{video.views} views</li>
            </div>
            </div>
            <div className='checkbox-container'>
            <input onClick={this.confirmDelete} type="checkbox" id="confirm-del" name="confirm-del"></input>  <p>I understand that deleting is permanent and can't be undone</p>
            </div>

            <div className='delete-modal-buttons-container'>
                <button onClick={this.closeModal}>Cancel</button>
                <button onClick={this.deleteVideo}>Delete Forever</button>
            </div>
        </div>
        </div>
        </div>
              
         ) 
        }
}


export default DeleteVideo;