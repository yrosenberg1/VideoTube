import React from "react";
import { Link } from "react-router-dom";

class LogInFormOne extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: this.props.email
        }
        
       
    //    this.handleSubmit = this.handleSubmit.bind(this)
    //    this.handleEmail = this.handleEmail.bind(this)
    //    this.handlePassword = this.handlePassword.bind(this)
   };


    //    handleSubmit(e){
    //        e.preventDefault();
    //         const user = Object.assign({}, this.state);
    //         this.props.form(user)
    //    };

    //    handleEmail(e){
    //        this.setState({email : e.target.value})
    //    }
   
      
    //    handlePassword(e){
    //        this.setState({password : e.target.value})
    //    }
    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-number-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }
   render(){

       return (
           <>
              
               
              <div className='login-text-container'>
               <h2 className='login-form-header'>Sign in </h2>
               <h3 className='login-form-subheader'>to continue to VideoTube</h3>
                   {/* <p> Forgot email?</p> */}
                   </div>
                   <input className='signup-form-input-section' type='text'
                   placeholder='Your Email'
                   value={this.props.email}
                   onChange={this.props.handleEmail} />

                
               <p className='demo-mode-text'> Use Demo Mode to Sign In with a demo account.
               <button className='demo-button' onClick={() => this.props.demo()}> Demo Mode </button></p>
               
               <div className='login-button-link'>
                 <Link className='signup-form-link' to='/signup'> Create account </Link>
                    <button onClick={() => this.props.next()} className='signup-form-button'>Next</button>
                   
                 </div>
                 <div className='errors'>
        {this.renderErrors()}
        </div>
           </>
       )
   }
}

export default LogInFormOne;
