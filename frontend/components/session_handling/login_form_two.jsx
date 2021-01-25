import React from "react";
import { Link } from "react-router-dom";

class LogInFormTwo extends React.Component{
    constructor(props){
    super(props)
    this.state ={
        password: ""
    }


    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleBack = this.handleBack.bind(this)
    

}

handlePassword(e){
    this.setState({password : e.target.value})
}

handleSubmit(e){
    // e.preventDefault();
  const user = {
      email: this.props.email,
      password: this.state.password
  }
  this.props.form(user)   
};

handleBack(e){
    e.preventDefault();
    this.props.back()
}

render(){
        
    return (
        <>
        <h1 className='sign-in-greeting'> Hi {this.props.email} </h1>
        <p></p>

        <p className='before-password'> To continue, first verify it’s you</p>
        <div>
        <input className='signup-form-input-section' type='password'
        value={this.state.password}
                placeholder='Enter your password'
               onChange={this.handlePassword} /> 
               </div>
               <div className='login-button-link'>
         <Link className='login-form-link'to='/'>Back to Home Page</Link>

         <button onClick={() => this.handleSubmit()} className='signup-form-button'>Next</button>
         </div>
        </>
    )
}
}
export default LogInFormTwo;