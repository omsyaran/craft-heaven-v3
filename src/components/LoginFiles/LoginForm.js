import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/Users/omsyaran/Desktop/craft-heaven-v3/src/firebase-config";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import './LoginFormStyle.css';
import weblogo from './logo-icon.svg';
import candlepic from './candle.jpg';
import emaillogo from './user.svg';
import passkey from './pass-key.svg';

function LoginForm(){

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const submitHandler = e => {
        e.preventDefault();
        login();
    }

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }    
    };

    const logout = async () => {
        await signOut(auth);
    }

    return(
        <div className="body">
            <img className='logo' src={weblogo} alt="CraftHeaven logo"/>
            <img className='candles' src={candlepic} alt="Candlepic"/>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <div className="form-group">
                        <img className='user-logo' src={emaillogo} alt="Email logo"/>
                        <input size="47" classname='inputs' type="text" name="login-email" id="login-email" placeholder="Email" onChange={(event) => {setLoginEmail(event.target.value);}}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <img className='passkey-logo' src={passkey} alt="Password logo"/>
                        <input size="47" className="inputs" type="password" name="login-password" id="login-password" placeholder="Password"  onChange={(event) => {setLoginPassword(event.target.value);}}/>
                    </div>
                    <br></br>
                    <input type="submit" value="Sign In"/>
                    <br></br>
                    <button onClick={logout}>Sign out</button>
                    <h6 className="register-opt">User registered in : </h6>{user?.email}
                </div>
            </form>
        </div>
    );
}

export default LoginForm;

// registered account : pavi@gmail.com      pword:123456
// <button onClick={logout}>Sign out</button>
