import React from 'react';

class VideoForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newVideoUpload: this.props.newVideo
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.uploadVideo(this.state.newVideoUpload)
    };

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value});
    };

    render(){
        return (
            <div>
                <p>VideoForm.jsx</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title 
                        <input
                            type='text'
                            value={this.state.title}
                            onChange={this.update('title')}
                            />
                    </label>
                   <label>
                       Description
                       <textarea
                            value={this.state.description}
                            onChange={this.update('description')}
                            />
                            
                  </label> 
                  <button type='submit' value={this.props.formType} />
                            
                </form>
            </div>
        )
    }
}

export default VideoForm;