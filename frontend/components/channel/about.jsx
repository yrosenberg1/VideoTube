import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {user} = this.props;
        
        return (
        <div>
            <p>Stats</p>
            <p> Joined {user.date}</p>
        </div>
        )
    }
}

export default About;

