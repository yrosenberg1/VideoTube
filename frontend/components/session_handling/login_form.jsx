import React from 'react';
import { Link } from 'react-router-dom';
import LogInFormOne from './login_form_one';
import LogInFormTwo from './login_form_two';

class LogInForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
            step: 1
        };

            // this.form = this.form.bind(this)
            this.next = this.next.bind(this)
            this.back = this.back.bind(this)
            this.handleEmail = this.handleEmail.bind(this)
            this.demo = this.demo.bind(this)
            
       
      
    };

    demo(){
      const demo = {
          email: "demo@gmail.com",
          password: "secretPassword"
      }  
      this.props.form(demo)
    }

    next(){
        if (this.state.step === 1){
            this.setState({step: 2})
        }
    }

    back(){
        if (this.state.step === 2){
            this.setState({step:1})
        }
    }

    handleEmail(e){
        this.setState({email: e.currentTarget.value})
    }

    

    form(){
       
        switch(this.state.step){
            case 1:
                return(
                    <LogInFormOne
                    email={this.state.email} 
                    next = {this.next}
                    step = {this.state.step}
                    password = {this.state.password}
                    handleEmail = {this.handleEmail}
                    errors = {this.props.errors}
                    demo= {this.demo}/>
                )
                case 2:
                    return(
                        < LogInFormTwo 
                    email={this.state.email} 
                    back = {this.back}
                    step = {this.state.step}
                    password = {this.state.password}
                    form = {this.props.form}
                    errors = {this.props.errors}/>
                    )
        }
    }
        
       
    render(){

        return (
            <div className='login-div'>
            <form className='sign-in-form'>
            <div className='google-img-container'>
            <img src={window.googlelogoURL} className='signup-form-logo'/>
            </div>
           
           {this.form()}
          
                </form>
                </div>
        )

    } 
   }
export default LogInForm;
