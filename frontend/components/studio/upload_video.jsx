import React from 'react';
import ReactDom from 'react-dom';
import { unmountComponentAtNode, render } from "react-dom";


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

            }

        }

     this.handleSubmit = this.handleSubmit.bind(this);
    
    }
componentDidMount(){
    const input = document.getElementById('file-upload')
    
    unmountComponentAtNode(input);

}
   

    handleSubmit(e){
        e.preventDefault();
        debugger
        const formData = new FormData();
            formData.append("video[title]", this.state.title);
            formData.append("video[uploader_id]", this.props.userId);
            formData.append("video[description]", this.state.description);
            formData.append("video[views]", 0);
            formData.append("video[video]", this.props.video.videoFile);
       debugger
        this.props.uploadVideo(formData).then(this.props.closeModal())
        
    };
    
    update(field){
      
       
       return e => this.setState({[field]: e.currentTarget.value})
    };

    render(){
        

        let {videoFile, videoUrl} = this.props.video
        const preview = videoUrl ? <video controls src={videoUrl} height='171' width='304'/> : null
        console.log(`videofile:${videoFile}`)
        console.log(`videourl:${videoUrl}`)
        let title = videoFile.name;
        let trimTitle = title.split(".")[0];
        console.log(this.state)
        
        return (
            <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>{this.state.title}</h2>
                    <span className='close-btn'><img src={window.close_svg}/></span>
                </div>
                <div className='modal-main'>
                    <h1>Details</h1>
           <div className='form-container'> 
             <form className='upload-vid-form' onSubmit={this.handleSubmit}>
                    <div className='upload-title-container'>
                        <p>Title (required)</p>
                    < textarea className="title-text"
                        type='text'
                        value={this.state.title}
                        maxLength="100"
                        placeholder='Add a title that describes your video'
                        onChange={this.update('title')}></ textarea>
                        <p>{this.state.title.length}/100</p>
                       </div>

                       <div className='upload-description-container'>
                           <p>Description (required)</p>
                   <textarea className='desc-text'
                        value={this.state.description}
                        maxLength="5000"
                        placeholder="Tell viewers about your video"
                        onChange={this.update('description')}></textarea>
                          <p>{this.state.description.length}/5000</p>
                       </div>

                        <div className='thumbnail-container'>
                       <div><h1> Thumbnail </h1></div>
                       <div><p>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. </p></div>
                        </div>
                        <label htmlFor="thumb-file-upload"><div className='select-thumbnail-button'> Upload thumbnail</div>  </label>
                        <input type="file" id="thumb-file-upload" name="thumb-file-upload" onChange={this.handleThumbFile}></input>

                        <label htmlFor="upload-vid-form"><button type='submit' value={this.props.formType}>Publish</button></label>
            </form></div>
              <div className='video-preview-container'>  {preview}
              <div className='video-fileName'><p>Filename</p><p>{title}</p></div>
               </div>
            </div>
            {/* <label htmlFor="upload-vid-form"><button type='submit' value={this.props.formType}>Publish</button></label> */}
        </div>
        </div>
        )
    
    }
}

export default UploadVideo;