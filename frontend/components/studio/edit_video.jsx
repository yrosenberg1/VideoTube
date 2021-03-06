import React from 'react';
import {Link} from 'react-router-dom';
import StudioCommentItemContainer from './studio_comment_item_container';
import StudioNavBarContainer from './studio_navbar_container';
import UploadVideoModal from './upload_video_modal';
class EditVideo extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            title: "",
            description: "",
            component: this.props.component
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUndo = this.handleUndo.bind(this);
        this.changeVal = React.createRef();
        this.commentBtn = React.createRef();
        this.editBtn = React.createRef();
        this.sideBtns = this.sideBtns.bind(this);
        
    }

  
    componentDidMount(){
        this.props.fetchComments(this.props.videoId)
        if (!this.props.video){
            
            this.props.fetchVideo(this.props.videoId).then( () => {
                let {video} = this.props
                this.setState({title: video.title, description: video.description})
             } )
        } else {
        
        let {video} = this.props
        this.setState({title: video.title, description: video.description})
        }

        if ( this.editBtn.current){
          if (this.props.component === 'Details'){
            
            this.editBtn.current.click()
        } else {
            
            this.commentBtn.current.click()
        }
    }
    }

    handleUndo(e){
        e.preventDefault()
        let {video} = this.props;
        this.setState({title: video.title, description: video.description}) 
    }

    handleSubmit(e){
        e.preventDefault();
        
        const formData = new FormData();
            formData.append("video[title]", this.state.title);
            formData.append("video[uploader_id]", this.props.userId);
            formData.append("video[description]", this.state.description);
            formData.append("video[views]", this.props.video.views);
            formData.append("video[video]", this.props.video.videoUrl);
            (formData)
       
       
        
    };
    
    update(field){
        let {video} = this.props

        if (this.changeVal.current){  
            this.changeVal.current.className = "studio-edit-btns-container"
        }
        
        if (this.changeVal.current && (this.state.title !== video.title || this.state.description !== video.description)){
            this.changeVal.current.className = "activate-btns"
        } 
              
       return e => this.setState({[field]: e.currentTarget.value})
       
    };

    sideBtns(e){
        
        e.preventDefault();
        e.target.parentElement.parentElement.childNodes.forEach( node => { node.classList.remove('selected-button')})
        e.target.parentElement.classList.add('selected-button')
        this.setState({component:e.target.innerText})
    }

        
    render(){
        let {video} = this.props
        let {comments} = this.props
        comments = Object.values(comments)
        if (!video){return null}
        (this.state)
        return(
            <div>
            <StudioNavBarContainer />
            <div className='side-main-container'>
                <div className='studio-side-container'>
                    <div className='studio-content-btn'><Link to={`/channel/${this.props.userId}/videos/upload` }><img height="24px" width="24px" src={window.backArrowGray} /><p>Channel content</p></Link></div>
                    
                    <div className='video-edit-side-thumbnail-container'>
                        {/* <div className='video-edit-side'><img width='224' height='127' src={window.youtube_four} /></div> */}
                        <div className='video-edit-side'>  <video width='224' height='127'><source src={video.videoUrl} type='video/mp4'/></video> </div>
                      <div className='video-edit-side-info'> 
                        <div>Your video</div>
                        <div className='vid-edit-title'>{video.title}</div>
                      </div>
                    </div>
                    <div className='studio-side-buttons'>
                        {/* <div className='selected-button' onClick={this.sideBtns}><p><i className="fas fa-pen"></i>Details</p></div> */}
                        <div  onClick={this.sideBtns}><p ref={this.editBtn} ><i className="fas fa-pen"></i>Details</p></div>
                        <div  onClick={this.sideBtns}><p ref={this.commentBtn} > <i className="far fa-comment-alt"></i>Comments</p></div>
                    </div>
                 </div>

                     {this.state.component === 'Details' ? ( 
                                    <div className='studio-main-container'>
                                    <div className='studio-main-header'>
                                        <div className='studio-header-container'>
                                        
                                            <div> <h1> Video details</h1> </div>
                                            <div ref={this.changeVal} className='studio-edit-btns-container'>
                                                <div onClick={this.handleUndo}>UNDO CHANGES</div>
                                                {/* <div>SAVE</div> */}
                                                <label htmlFor="upload-vid-form"><button className='edit-form-btn' type='submit' form='edit-form' value={this.props.formType}>SAVE</button></label>
                                            </div>
                                     </div>
                                     </div>  
                                     <div className='edit-video-main-container'>
                                     <div className='form-container'> 
                             <form id='edit-form' className='edit-vid-form' onSubmit={this.handleSubmit}>
                                    <div className='edit-title-container'>
                                        <p>Title (required)</p>
                                    < textarea className="edit-title-text"
                                        type='text'
                                        value={this.state.title}
                                        maxLength="100"
                                        placeholder='Add a title that describes your video'
                                        onChange={this.update('title')}></ textarea>
                                        <p className='input-count-p'>{this.state.title.length}/100</p>
                                       </div>
                
                                       <div className='edit-description-container'>
                                           <p>Description (required)</p>
                                   <textarea className='edit-desc-text'
                                        value={this.state.description}
                                        maxLength="5000"
                                        placeholder="Tell viewers about your video"
                                        onChange={this.update('description')}></textarea>
                                          <p className='input-count-p'>{this.state.description.length}/5000</p>
                                       </div>
                
                                        <div className='edit-thumbnail-container'>
                                       <div><h1> Thumbnail </h1></div>
                                       <div><p>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. </p></div>
                                        </div>
                                        <label htmlFor="thumb-file-upload"><div className='select-thumbnail-button'> Upload thumbnail</div>  </label>
                                        <input type="file" id="thumb-file-upload" className="thumb-file-upload" onChange={this.handleThumbFile}></input>
                
                                        {/* <label htmlFor="upload-vid-form"><button type='submit' value={this.props.formType}>Publish</button></label> */}
                            </form></div>
                            <div className='edit-right-side-container'>
                                <div><video width='352' height='198' key={video.videoUrl} controls>
                         <source src={video.videoUrl} type='video/mp4'/></video></div>
                                <div>Filename</div>
                            </div>
                                     </div>
                                 </div>):
                                ( null)}  
                                
                                {this.state.component === 'Comments' ? ( 
                                    <div className='studio-main-container'>
                                    <div className='studio-main-header'>
                                        <div className='channel-header-container'> <h1> Video comments</h1> </div>
                                        <div className='upload-header-container'>  <p>Published</p> </div>
                                        <div className='studio-main-filter-container'>
                                             {/* <p>Filter</p> */}
                                       </div>   
                                           {comments.map((comment, idx) => {
                                          if (comment.parent_comment_id === null){
                                            return (
                                                <ul className='studio-user-comments' key={idx}>
                                                    
                                                     <StudioCommentItemContainer comment={comment} /> 
                                                </ul>
                                            )}
                                        }, this)
                                        }
                                            </div>
                                            </div>
                                                                    

                                            ): null}
             
            </div>
            <UploadVideoModal />
            </div>
        )
    }
}

export default EditVideo;