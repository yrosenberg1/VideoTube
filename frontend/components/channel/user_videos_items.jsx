import React from 'react';

class UserVideosItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {video} = this.props;
        
        return (
        <div>
            <li>{video.title}</li>
        </div>
        )
    }
}

export default UserVideosItem;
