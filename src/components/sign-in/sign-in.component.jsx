import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../firebase/firebase.utils';

class SignInComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSignIn = event => {
        event.preventDefault();

        this.setState({email:'', password:''});
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I have already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSignIn}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton 
                            onClick={SignInWithGoogle}
                            isGoogleSignIn
                        >
                        Sign In With Google
                        </CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SignInComponent;