import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Signup.css'


const Signup = () => {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [confirmPassword,setConfirmPassword] =useState('');
    const [error,setError] =useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user){
        navigate('/shop');
    }

    const handleCreateUser = event =>{
        event.preventDefault ();
        if(password !== confirmPassword){
            setError('Your two password  match');
            return;
        }
        if (password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
        createUserWithEmailAndPassword(email,password);
    }
    
    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sign up</h2>

         <form onSubmit={handleCreateUser} >
            <div className="input-group">
            <label htmlFor="email">Email</label> 
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
        </div>

        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="Password" id="" required  />
        </div>

        <div className="input-group">
            <label htmlFor="confirm-Password">Confirm Password</label>
            <input onBlur ={handleConfirmPasswordBlur}type="password" name="confirm-Password" id="" />
        </div>
        <p style={{color: 'red'}}>{error}</p>
        <input  className='form-submit' type="Submit" value="Sign up"/>

        </form>
        <p>Already have an Account? <Link className="form-link" to= "/login">Login</Link> </p>
        </div>
    </div>
    );
};

export default Signup;