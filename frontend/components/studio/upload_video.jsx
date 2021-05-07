import React from 'react';
import VideoThumbnail from './video_thumbnail';
import { unmountComponentAtNode } from "react-dom";



class UploadVideo extends React.Component{
    constructor(props){
        super(props);
     
        let {videoFile, videoUrl} = this.props.video
        let title = videoFile.name;
        let trimTitle = title.split(".")[0];
        this.state = {
            title: trimTitle,
            description: "",
            errors: {

            },
            generatedTn: null,
            thumbFile: null,
            thumbUrl: null,
            thumbnail: ""


        }
     this.closeModal = this.closeModal.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleThumbFile = this.handleThumbFile.bind(this);
     this.retreiveFn = this.retreiveFn.bind(this);
     this.selectThumb = this.selectThumb.bind(this);
    
    }

    retreiveFn(thumbnail){
       
        this.setState({thumbnail: thumbnail}) 
        
        }
        
        selectThumb(e){
            e.preventDefault()
            debugger
        }
     
    handleThumbFile(e){
        
        const file = e.target.files[0]
        const fileReader = new FileReader();
        
        fileReader.onloadend = () =>  {
            
            return (
            this.setState({thumbFile: file, thumbUrl: fileReader.result})
            )
            
        };


        if(file) {
       fileReader.readAsDataURL(file); 
       
        }
        
    }
componentDidMount(){
    const input = document.getElementById('file-upload')
    
    unmountComponentAtNode(input);

}

    closeModal(){
        this.props.closeModal()
    }

    handleSubmit(e){
        e.preventDefault();
        
        const formData = new FormData();
            formData.append("video[title]", this.state.title);
            formData.append("video[uploader_id]", this.props.userId);
            formData.append("video[description]", this.state.description);
            
            formData.append("video[video]", this.props.video.videoFile);
       
        this.props.uploadVideo(formData).then(
        () => this.props.closeModal()
        )
        //ap this.props.closeModal()
        
    };
    
    update(field){
      
       
       return e => this.setState({[field]: e.currentTarget.value})
    };

    render(){
        

        let {videoFile, videoUrl} = this.props.video
        const {thumbUrl} = this.state
        const preview = videoUrl ? <video controls src={videoUrl} height='171' width='304'/> : null
       const icon =  thumbUrl ? <img src={thumbUrl} /> : null
        let title = videoFile.name;
        let trimTitle = title.split(".")[0];
       
        
        return (
            <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>{this.state.title}</h2>
                    <span onClick={this.closeModal} className='close-btn'>
                        {/* <img src={window.close_svg}/> */}
                        <i className="fas fa-times"></i>
                        </span>
                </div>
                <div className='modal-main'>
            <div className='upload-modal-details'>   <h1>Details</h1> </div>
          <div className='modal-body-container'>
           <div className='upload-modal-form-container'> 
             <form id='upload-video' className='upload-vid-form' onSubmit={this.handleSubmit}>
                    <div className='upload-title-container'>
                        <p className='upload-modal-name'>Title (required)</p>
                    < textarea className="title-text"
                        type='text'
                        value={this.state.title}
                        maxLength="100"
                        placeholder='Add a title that describes your video'
                        onChange={this.update('title')}></ textarea>
                      <p className='upload-modal-count'>{this.state.title.length}/100</p> 
                       </div>

                       <div className='upload-description-container'>
                           <p className='upload-modal-name'>Description (required)</p>
                   <textarea className='desc-text'
                        value={this.state.description}
                        maxLength="5000"
                        placeholder="Tell viewers about your video"
                        onChange={this.update('description')}></textarea>
                          <p className='upload-modal-count'>{this.state.description.length}/5000</p>
                       </div>

                        <div className='thumbnail-container'>
                       <div className='thumbnail-header-div'><h1> Thumbnail </h1></div>
                       <div className='thumbnail-upload-instruct'><p>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. </p></div>
                        </div>
                        <div className='thumbnail-selector-container'>
                        <label htmlFor="thumb-file-upload">
                            <div className='select-thumbnail-button'>
                                <div className='photo-icon'><img src={window.uploadPhotoIco} /></div>
                              <p>Upload thumbnail</p>
                            </div>
                        </label>

                         
                        <input type="file" id="thumb-file-upload" name="thumb-file-upload" onChange={this.handleThumbFile}></input>
                        <div onClick={this.selectThumb} className="thumbnail">{icon}</div>
                        <div onClick={this.selectThumb} className='thumbnail'><VideoThumbnail videoUrl={videoUrl} retreiveFn ={this.retreiveFn} />  </div>
                        </div>

                        {/* <label htmlFor="upload-vid-form"><button form='upload-video' type='submit' value={this.props.formType}>Publish</button></label> */}
            </form></div>
              <div className='video-preview-container'>  {preview}
              <div className='video-fileName'><p>Filename</p>
              <div className='video-fileName-title'><p>{title}</p></div>
              </div>
               </div>
               </div>
            </div>
           <div className='upload-modal-footer'> 
           <div className='submit-btn-container'><label htmlFor="upload-vid-form"><button className='upload-form-submit-btn' form='upload-video' type='submit' value={this.props.formType}>Publish</button></label>  </div>
           </div> 
           </div>
        </div>
        )
    
    }
}

export default UploadVideo;