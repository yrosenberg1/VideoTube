import React from 'react';
import {Link} from 'react-router-dom';

class StudioSide extends React.Component {
    constructor(props){
        super(props)

        this.sideBtns = this.sideBtns.bind(this);
    }

    sideBtns(e){
        debugger
        e.preventDefault();
        e.target.parentElement.parentElement.childNodes.forEach( node => { node.classList.remove('selected-button')})
        e.target.parentElement.classList.add('selected-button')
        this.props.buttonSwitch(e.target.innerText)
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
             {/* <div className='selected-button' onClick={this.sideBtns}><p> <i className="fas fa-pen"></i> Content</p></div> */}
             <div className='selected-button' onClick={this.sideBtns}><p> <i className="fas fa-pen"></i>Content</p></div>
             <div onClick={this.sideBtns}><p> <i className="far fa-comment-alt"></i>Comments</p></div>
             {/* <div><p>Playlists</p></div> */}
            </div>
        </div>
        )
    }
}


export default StudioSide;


