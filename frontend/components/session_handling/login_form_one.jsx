import React from "react";
import { Link } from "react-router-dom";

class LogInFormOne extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: this.props.email,
            errors: {}
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
    // renderErrors(){
    //     return(
    //         <ul>
    //             {this.props.errors.map((error, i) => (
                    
    //                 <li key={`error-number-${i}`}>
    //                     {error}
    //                 </li>
    //               ))}
    //         </ul>
    //     )
    // }

    componentWillUnmount(){
        const errors = [];
        this.props.clearErrors(errors)

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
               {this.props.stateErr ? <div className='errors'><img className='error-icon' src={window.errorIcon} /> <li>{this.props.stateErr}</li></div> : null }
                
               <p className='demo-mode-text'> Use Demo Mode to Sign In with a demo account.
               <button className='demo-button' type='button' onClick={() => this.props.demo()}> Demo Mode </button></p>
               
               <div className='login-button-link'>
                 <Link className='signup-form-link' to='/signup'> Create account </Link>
                    <button onClick={() => this.props.next()} className='signup-form-button'>Next</button>
                   
                 </div>
               
       
        
        
           </>
       )
   }
}

export default LogInFormOne;
