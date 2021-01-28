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
        <h1 className='sign-in-greeting'> Hi {this.props.email} </h1>
        <p></p>

        
        <div>
        <input className='signup-form-input-section' type='password'
        value={this.state.password}
                placeholder='Enter your password'
               onChange={this.handlePassword} /> 
               </div>
               <div className='placeholder-space'>
               <div className='errors'>
                 {this.renderErrors()}
                 </div>
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