import React from "react";
import { Link } from "react-router-dom";

class LogInFormTwo extends React.Component{
    constructor(props){
    super(props)
    this.state ={
        password: "",
        errors: ""
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
    if (this.state.password === ""){
        return this.setState({errors:"Enter a password"})
    }
    this.setState({errors:""})
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

// renderErrors(){
//     return(
//      {this.props.errors ? <div className="errors"><img className="error-icon" src={window.errorIcon} /><li>{this.props.errors}</li></div> : null}
//     )
// }

componentWillUnmount(){
    const errors = [];
    this.props.clearErrors(errors)

  }
  

render(){
        
    return (
        <>
        <div className='sign-in-greeting'> <h1>Welcome</h1> 
        <div onClick={() => this.props.back()} className='sign-in-profile'>
            <i className="fas fa-user-circle"></i>
            <p> {this.props.email}</p> 
            <img className='expand-arrow' src={window.expandMore} />
            
         </div>
        </div>
        
        <div>
        <input className='signup-form-input-section' type='password'
        value={this.state.password}
                placeholder='Enter your password'
               onChange={this.handlePassword} /> 
               </div>
               <div className='placeholder-space'>
             
                 {this.state.errors ?  <div className='errors'><img className='error-icon' src={window.errorIcon} /><li>{this.state.errors}</li></div>: null}
                 {this.props.errors.length ? <div className="errors"><img className="error-icon" src={window.errorIcon} /><li>{this.props.errors}</li></div> : null}
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