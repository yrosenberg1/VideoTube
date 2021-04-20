import React from 'react';
import {Link} from 'react-router-dom';

class StudioSide extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let {user} = this.props;
        return (
        <div className='studio-side-container'>
            <div className='studio-side-user-info'>
             <div className='studio-profile'>{user.first_name[0]}</div>
             <div className='studio-side-name-container'>
                <div className='studio-side-txt'>Your Channel</div>
                <div className='studio-user-name'>{user.first_name} {user.last_name}</div>
             </div>  
            </div>

            <div className='studio-side-buttons'>
             <div><p>Content</p></div>
             <div><p>Comments</p></div>
             {/* <div><p>Playlists</p></div> */}
            </div>
        </div>
        )
    }
}


export default StudioSide;


