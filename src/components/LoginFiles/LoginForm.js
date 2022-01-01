import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/Users/omsyaran/Desktop/craft-heaven-v3/src/firebase-config";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import weblogo from './logo-icon.svg';

function LoginForm(){

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

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
            <div className="form-inner">
                <div className="form-group">
                    <input size="47" classname='inputs' type="text" name="login-email" id="login-email" placeholder="Email" onChange={(event) => {setLoginEmail(event.target.value);}}/>
                </div>
                <br></br>
                <div className="form-group">
                    <input size="47" className="inputs" type="password" name="login-password" id="login-password" placeholder="Password"  onChange={(event) => {setLoginPassword(event.target.value);}}/>
                </div>
                <br></br>
                <button onClick={login}>Login</button>
                <button onClick={logout}>Sign out</button>
            </div>
            <h4>User registered in : </h4>
            {user?.email}
        </div>
    );
}

export default LoginForm;

// registered account : pavi@gmail.com      pword:123456
