import React from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: ""

            
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
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
       
    render(){

        return (
            <>
               
                <h2> {this.props.formType} </h2>
                <h3>to continue to VideoTube</h3>
                <form onSubmit={this.handleSubmit} className='sign-in-form'>
                    <p> Forgot email?</p>
                    <p> Not your computer? Use demo mode to see.</p>
                    <p>create account</p>
                    <input type='text'
                    value={this.state.email}
                    onChange={this.handleEmail} />

                    <input type='text'
                    value={this.state.password}
                    onChange={this.handlePassword} />

                    <button>{this.props.formType}</button>

                </form>
            </>
        )
    }
}

export default LogInForm;
