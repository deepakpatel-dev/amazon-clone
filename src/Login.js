import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
        // Some fancy firebase login stuff
    }
    
    const register = e =>{
         e.preventDefault()
        // Some fancy firebase register stuff
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
