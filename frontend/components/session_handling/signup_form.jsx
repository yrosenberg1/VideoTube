import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            confirm: "",
            errors: ""
            // confirm:"Confirm password"
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.renderNameErrors = this.renderNameErrors.bind(this);
        this.renderPasswordErrors = this.renderPasswordErrors.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this)
    };
// componentDidUpdate(e){
//     e.preventDefault();
//     if (this.props.errors.length !== 0){ 
//         this.setState({
//             err: true})
//         } else {
//             this.setState({
//                 err: false})
//             }
        
//         };

        handleSubmit(e){
            e.preventDefault();

            let {confirm, password} = this.state;
            let pwErrors = this.props.errors.password;

            if (password === ""){
                 this.setState({errors: "Enter a password"})
            } else if 
            (pwErrors){
                this.setState({errors:"Use 8 characters or more for your password"})
            } else if
             (confirm === ""){
                 this.setState({errors: "Confirm your password"})
            } else if

             (confirm !== password){
               return  this.setState({errors: "Those passwords don't match"})
            }
        
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

        handleConfirm(e){
            this.setState({confirm : e.target.value})
        }
        // renderErrors(){
           
        //         return(
        //         <ul>
        //             {this.props.errors.map((error, i) => (
        //                 <li key={`error-number-${i}`}>
        //                     {error}
        //                 </li>
        //             ))}
        //         </ul>
        //     )
        // }

            renderNameErrors(){
               
                let {errors} = this.props; 
                if (errors.first_name && errors.last_name){
                    return (
                       <div className='errors'> <img className='error-icon' src={window.errorIcon} /><li>Enter first and last names</li> </div>
                    )
                }
               if (errors.first_name){
                    return (
                        <div className='errors'>
                           <img className='error-icon' src={window.errorIcon} /> <li>Enter first name</li>
                        </div>
                    )
                }
               if (errors.last_name){
                    return (
                        <div className='errors'>
                          <img className='error-icon' src={window.errorIcon} />  <li>Enter last name</li>
                        </div>
                    )
                }
                
        }

        renderEmailError(){
            return (
                <>
        {this.props.errors.email ? <div className='errors'> <img className='error-icon' src={window.errorIcon} />
            <li>Choose an email address</li>
            </div> : null}
           
           </>
           )

        
     }

     renderPasswordErrors(){
        let {password, errors} = this.state;
      
        if ( errors.length > 0 && password === ""){
            return (
                <div className='errors'><img className='error-icon' src={window.errorIcon} /><li>Enter a password</li></div>
            )
        }

       

        if (errors){
            return (
                <div className='errors'><img className='error-icon' src={window.errorIcon} /><li>{errors}</li></div>
            )
        }
     }

        componentWillUnmount(){
          const errors = [];
          this.props.clearErrors(errors)

        }
        
        handleConfirm(e){
            this.setState({confirm : e.target.value})
        }
    render(){
        // 
        
        return (
           
            <div className='signup-div'>
               <form onSubmit={this.handleSubmit} className='sign-up-form'>
                   <div className='signup-form-container'>
                       <div className='form-component-container'>
                     <img src={window.googlelogoURL} className='signup-form-logo'/>
                   
                <h1 className='signup-form-header'> Create your VideoTube Account </h1>
                <h3 className='signup-form-subheader'>to continue to VideoTube</h3>
               
                        {/* 'signup-form-input-section'> */}
             <div className='name-container'>
                <input className='signup-form-name' type='text'
                    value={this.state.first_name}
                    onChange={this.handleFirstName}
                    placeholder="First name" />
                
                <input className='signup-form-name' type='text'
                    value={this.state.last_name}
                    onChange={this.handleLastName}
                    placeholder="Last name" />
                </div>
                {this.renderNameErrors()}
                    <input className='signup-form-input' type='text'
                    value={this.state.email}
                    onChange={this.handleEmail}
                    placeholder='Your email address' />
                {this.renderEmailError()}
                <div className='name-container'>
                    <input className='signup-form-name' type='password'
                    value={this.state.password}
                    onChange={this.handlePassword}
                    placeholder='Password' />

                    <input className='signup-form-name' type='password'
                    value={this.state.confirm}
                    onChange={this.handleConfirm}
                    placeholder='Confirm Password' />
                </div>
                {this.renderPasswordErrors()}
                <div className='signup-button-link'>
                    <Link className='signup-form-link' to='/login'>Sign in instead </Link>
                    <button  className='signup-form-button'>Next</button>
                    
               </div>
               
              
               </div>
                <div className='google-lotr-pic'>
                  <img src={window.googlesignup} />
                  <div className='signup-errors'>
                  {/* {this.renderErrors()} */}
                  </div>
                </div>
                {}
              </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;
