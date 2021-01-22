import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: "Your email address",
            password: "Password",
            first_name: "First name",
            last_name: "Last name"
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
                <h2 className='signup-form-header'> Create your VideoTube Account </h2>
                <h3 className='signup-form-subheader'>to continue to VideoTube</h3>
                
                <input className='signup-form-input' type='text'
                    value={this.state.first_name}
                    onChange={this.handleFirstName} />
                
                <input className='signup-form-input' type='text'
                    value={this.state.last_name}
                    onChange={this.handleLastName} />

                    <input className='signup-form-input' type='text'
                    value={this.state.email}
                    onChange={this.handleEmail} />

                    <input className='signup-form-input' type='password'
                    value={this.state.password}
                    onChange={this.handlePassword} />

                    {/* <input type='text'
                    value={this.state.confirm}
                    onChange={this.handleConfirm} /> */}

                    <Link className='signup-form-link' to='/login'>Sign in instead </Link>
                    <button className='signup-form-button'>Next</button>


                </form>
            </div>
        )
    }
}

export default SignUpForm;
