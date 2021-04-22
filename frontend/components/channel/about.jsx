import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {user} = this.props;
        let {videos} = this.props;
       
        let ViewsArray = Object.values(videos).map(video => video.views)
        let totalViews = ViewsArray.reduce((acc,val) => acc + val)
         

        
        return (
            <div className='about-container'>
                <div className='about-filler'></div>
        <div className='about-info-container'>
            <p>Stats</p>
            <p> Joined {user.date}</p>
            <p>{totalViews} views</p>
        </div>
        </div>
        )
    }
}

export default About;

