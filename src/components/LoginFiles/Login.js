import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import './LoginFormStyle.css';
import weblogo from './logo-icon.svg';
import candlepic from './candle.jpg';
import emaillogo from './email.svg';
import passkey from './pass-key.svg';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import React from "react";
import { getAuth } from 'firebase/auth';

const Login = ({ history }) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            history.push('/dashboard')
        }
    },[])

    const onLogin = () => {
        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
                history.push('/dashboard')
            })
            .catch(e=>alert(e.message))
            .finally(()=>setLoading(false))
    }
    
    return(
        <div className="body">
            <img className='logo' src={weblogo} alt="CraftHeaven logo"/>
            <img className='candles' src={candlepic} alt="Candlepic"/>
            <div>
                <button className='cust-form'>Customer</button>
                <button className='seller-form'>Seller</button>
             </div>
                <div className="form-inner">
                    <div className="form-group">
                        <img className='email-logo' src={emaillogo} alt="Email logo"/>
                        <input size="20" classname='inputs' type="email" name="email" id="login-email" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value);}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <img className='passkey-logo' src={passkey} alt="Password logo"/>
                        <input size="20" className="inputs" type="password" name="password" id="login-password" value={password} placeholder="Password"  onChange={(e) => {setPassword(e.target.value);}}/>
                    </div>
                    <br></br>
                    <button onClick={onLogin} value="Sign In">{loading ? 'Logging you in ...' : 'Login'}</button> 
                    <br></br>
                    <div className="m-5">
                        <Link to="/signup">
                            Don't have an account?
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default Login;

// registered account : pavi@gmail.com      pword:123456
// <button onClick={logout}>Sign out</button>
