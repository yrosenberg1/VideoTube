import React, { Component } from 'react'

 class VideoThumbnail extends Component {
     constructor(props){
         super(props)
        
         this.state = {
                
                thumbnail: false,
                metadataLoaded: false,  
                seeked: false,          
                suspended: false
                  
         }

         this.videoEl = React.createRef();
         this.canvas = React.createRef();
     }

   
     componentDidUpdate(prevProps, prevState) {
        if (!this.state.thumbnail){
            const { seeked, thumbnail} = this.state;
            
          
                this.videoEl.current.currentTime = 1;
            
            if(seeked && !thumbnail){
                
            this.getThumbnail()
            }
        }
     }



     
     getThumbnail(){
        const width = 111;
        const height = 68;
        const video = this.videoEl.current;
        const canvas = this.canvas.current;
     
     
        canvas.height = height;
        canvas.width = width;
        

        canvas.getContext('2d').drawImage(video,0,0, width, height);
        

        const thumbnail = canvas.toDataURL('image/png');
        video.pause()
       video.src = "";
     

        this.setState({thumbnail:thumbnail})
        this.props.retreiveFn(thumbnail)
        
     }

    render(){
        const {videoUrl} = this.props;
        const {thumbnail} = this.state;
        
        if (!thumbnail){
            return (
                <div>
                    <canvas ref={this.canvas}></canvas>
                <video height='0' width='0'  muted
                       ref={this.videoEl}
                       src={videoUrl}
                       onLoadedMetadata={() => this.setState({ metadataLoaded: true })}
                       onLoadedData={() => this.setState({ dataLoaded: true })}
                       onSuspend={() => this.setState({ suspended: true })}
                       onSeeked={() => this.setState({ seeked: true })}
                ></video>       
                </div>
            )

        } else {
            return (
            
                   <img src={thumbnail} alt="auto-generated-thumb" />
       
            )
        }
        
    }
}

export default VideoThumbnail;
