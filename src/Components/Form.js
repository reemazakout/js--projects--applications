/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import PasswordStrengthMeter from './PasswordPatreen';
import google from '../assets/flat-color-icons_google.png';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router';

class Form extends Component {
    state = {
        isAgree: false,
        isInformed: false,
        email: "",
        password: "",
        restPassword: "",
        massagePasword: false,
        massageEmail: false,
        massage: false
    }
   



    handleInputChange = e => {
       
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(this.state.massagePasword!="" ){
            return   this.state.massagePasword=false

        }
     else   if(this.state.massagePasword!="" ){
            return   this.state.massagePasword=false

        }
        this.setState({
            [name]: value
        });
        if (this.state.restPassword === this.state.password) {
            this.setState((preState) => {
                return preState.massage = false
            });
        }
    };
    handleSubmit = () => {

        console.log(this.state.massageEmail)
        if (this.state.email === '') {
            this.setState((preState) => {
                return preState.massageEmail = true
            });
        }
        else if (this.state.password === "") {
            this.setState((preState) => {
                return preState.massagePasword = true, preState.massageEmail = false
            });
        }
        else if (this.state.password != this.state.restPassword) {
            this.setState((preState) => {
                return preState.massagePasword = false, preState.massage = true
            });
        }
        else if (this.state.isAgree === false) {
            toast.error('يجب عليك الموافقة على الأحكام والشروط', "", {
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true
            })
        }
        else {
            toast.success('تم تسجيل الدخول بنجاح', "", {
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true
            })
        }

    };
    render() {
        return (
            <div className='form' onSubmit={this.handleSubmit}>
                <label className='formGroup'>
                    Email address*
                    <input
                        className='mb'
                        placeholder='Enter email address'
                        type="email"
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    <p className='error'>  {this.state.massageEmail ? " Please enter your email" : ""} </p>

                </label>

                <label className='formGroup'>
                    Create password*
                    <input
                        placeholder='Password'
                        name='password'
                        type={"password"}
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                    <p className='error'>  {this.state.massagePasword ? " Please enter your Password" : ""} </p>
                </label>
                <PasswordStrengthMeter password={this.state.password} />

                <label className='formGroup'>
                    Repeat password*
                    <input
                        placeholder='Repeat password'
                        name='restPassword'
                        type={"password"}
                        value={this.state.restPassword}
                        onChange={this.handleInputChange} />
                    <p className='error'>  {this.state.massage ? " Your Password no matched......!" : ""} </p>

                </label>
                <label className='formGroup--custom agrees'>
                    <input
                        name="isAgree"
                        type="checkbox"
                        checked={this.state.isAgree}
                        onChange={this.handleInputChange} />
                    I agree to terms & conditions
                </label>
                <div className='formGroup--custom'>
                    <input type="submit" value="Register Account" onClick={this.handleSubmit} />

                </div>
                <div className='dividers'>
                    <hr />
                    <p>Or</p>
                    <hr />
                </div>
                <div className=' formGroup--customs BackLogin'>
                    <img src={google} alt="google" className='google' />
                    <input type="submit" value="login" />
                    <ToastContainer />
                </div>


            </div>

        )
    }
}

export default Form