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
      
   render(){

       return (
           <>
              
               
              
               <h2 className='login-form-header'>Sign in </h2>
               <h3 className='login-form-subheader'>to continue to VideoTube</h3>
                   {/* <p> Forgot email?</p> */}
                   <input className='signup-form-input-section' type='text'
                   placeholder='Your Email'
                   value={this.props.email}
                   onChange={this.props.handleEmail} />

                 
               <p className='demo-mode-text'> Use demo mode to sign in with a demo account.</p>
               <div className='login-button-link'>
                 <Link className='signup-form-link' to='/signup'> Create new account </Link>
                    <button onClick={() => this.props.next()} className='signup-form-button'>Next</button>

                 </div>
              
           </>
       )
   }
}

export default LogInFormOne;
