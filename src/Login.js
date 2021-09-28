import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';
import {useHistory } from 'react-router';

const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
        // Some fancy firebase login stuff
        auth 
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                // it successfully Sign in a new user with email and
             
             
                 history.push('/')
             
            })
            .catch(error => alert(error.message))
    }
    
    const register = e =>{
         e.preventDefault()
        // Some fancy firebase register stuff
        auth 
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                // it successfully created a new user with email and
             console.log(auth);
             if (auth) {
                 history.push('/')
             }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
         </Link>
         <div className="login__container">
            <h2>Sign-in</h2>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="login__signInButton" type='submit' onClick={signIn}>Sign-In</button>
            </form>
            <p>By Signing-in you agree to AMAZON FAKE CLONE conditions of use & sale. 
                Please see our Privacy Notice,our Cookies Notice and our Intrest-based Ads Notice. 
            </p>
            <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
         </div>
        </div>
    )
}

export default Login
