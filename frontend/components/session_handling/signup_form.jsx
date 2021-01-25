import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: ""
            // confirm:"Confirm password"
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        // this.handleConfirm = this.handleConfirm.bind(this)
    };

        handleSubmit(e){
            e.preventDefault();
             const user = Object.assign({}, this.state);
             this.props.form(user)
        };

        handleEmail(e){
            this.setState({email : e.target.value})
        }
        
        handlePassword(e){
            this.setState({password : e.target.value})
        }

        handleFirstName(e){
            this.setState({first_name : e.target.value})
        }
        handleLastName(e){
            this.setState({last_name : e.target.value})
        }
       
        // handleConfirm(e){
        //     this.setState({confirm : e.target.value})
        // }
    render(){
        
        return (
            <div className='signup-div'>
               
               
                <form onSubmit={this.handleSubmit} className='sign-in-form'>
                 
                 <img src={window.googlelogoURL} className='signup-form-logo'/>
                
                <h1 className='signup-form-header'> Create your VideoTube Account </h1>
                <h3 className='signup-form-subheader'>to continue to VideoTube</h3>
               
                {/* 'signup-form-input-section'> */}
                <div>
                <input className='signup-form-name' type='text'
                    value={this.state.first_name}
                    onChange={this.handleFirstName}
                    placeholder="First name" />
                
                <input className='signup-form-name' type='text'
                    value={this.state.last_name}
                    onChange={this.handleLastName}
                    placeholder="Last name" />
                </div>
                    <input className='signup-form-input' type='text'
                    value={this.state.email}
                    onChange={this.handleEmail}
                    placeholder='Your email address' />

                    <input className='signup-form-input' type='password'
                    value={this.state.password}
                    onChange={this.handlePassword}
                    placeholder='Password' />

                    {/* <input type='text'
                    value={this.state.confirm}
                    onChange={this.handleConfirm} /> */}
                
                <div className='signup-button-link'>
                    <Link className='signup-form-link' to='/login'>Sign in instead </Link>
                    <button className='signup-form-button'>Next</button>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;
