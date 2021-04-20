import React from 'react';

import UploadVideoModal from './upload_video_modal';


class SelectFile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videoFile: null,
            videoUrl: null
        }

        this.input = React.createRef();
        this.handleVideoFile = this.handleVideoFile.bind(this);
    };

    componentDidMount(){
        
    document.body.classList.add('modal-open-scroll');
        
        
    }
  
    handleVideoFile(e){
        debugger
        const file = e.target.files[0]
        const fileReader = new FileReader();
        
        fileReader.onloadend = () =>  {
            debugger
            return (
            this.setState({videoFile: file, videoUrl: fileReader.result})
            )
            
        };


        if(file) {
       fileReader.readAsDataURL(file); 
       debugger
        }
        debugger
    }

    componentWillUnmount(){
        document.body.classList.remove('modal-open-scroll');
    }
    
    
    handleSubmit(e){
            e.preventDefault();
            const formData = new FormData();
            formData.append("video[title]", this.state.title);
        }
    
    render(){
        console.log(this.state);
        
        //    const preview = this.state.videoUrl ? <video src={this.state.videoUrl }/> : null
        
        
        // const renderUpload2 = this.state.videoFile ?  <InterModalContainer video={this.state} modal={"uploadVideo"}  /> : null
     
       const  renderUpload2 = this.state.videoFile ?  <UploadVideoModal video={this.state} modal={"uploadVideo"} /> : null
        
        debugger
        return (
            
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h2>Upload Videos</h2>
                        <span className='close-btn'>  <img src={window.close_svg}/></span>
                    </div>
                    <div className='modal-body'>
                     <label htmlFor="file-upload">   <div className='upload-img'> <img src={window.large_file_upload} /></div></label>
                        <p className='drag-instruction'>Drag and drop video files to upload</p>
                        <label htmlFor="file-upload"><div className='select-video-button'> SELECT FILES</div>  </label>
                        <p className='copy-disclaimer'>Please be sure not to violate others' copyright or privacy rights.</p>  
                        <input ref={this.input} type="file" id="file-upload" name="file-upload" onChange={this.handleVideoFile}></input>
                   
                    </div>
                </div>
                    {renderUpload2}
            </div>
        )
    }
}

export default SelectFile;