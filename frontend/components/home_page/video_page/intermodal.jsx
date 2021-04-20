import React from 'react';
import UploadVideoModal from './upload_video_modal';

class InterModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true
        }
}

componentDidMount(){
    // this.props.closeModal()
    
    
    //  return (
    // //   <UploadVideoModal video={this.props.videoInfo} modal={"uploadVideo"} /> 
    //  )

}

closeModal(){
    this.setState({show: null})
}


componentWillUnmount(){
    debugger
}
render(){
    
    
if (!this.state.show) {return null } else {
debugger
return (
        
    <div className='modal-background' onClick={this.closeModal}>

          {/* <UploadVideoModal video={this.props.videoInfo} /> */}
  
    </div>
    )
}

}

}
export default InterModal;