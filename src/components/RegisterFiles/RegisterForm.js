import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "/Users/omsyaran/Desktop/craft-heaven-v3/src/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import candlepic from './candle.jpg';
import weblogo from './logo-icon.svg';
import emaillogo from './email.svg';
import passkey from './pass-key.svg';
import fname from './flname.svg';
import lname from './flname.svg';
import username from './user.svg';
import './RegisterFormStyle.css';

function RegisterForm(){

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail,registerPassword);
            console.log(user);
        }
        catch (error){
            console.log(error.message);
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        register();
    }

    const logoutHandle = e => {
        e.preventDefault();
        logout();
    }

    const logout = async () => {
        await signOut(auth);
    }

    return(
        <div className="body">
        <img className='logo' src={weblogo} alt="CraftHeaven logo"/>
        <img className='candles' src={candlepic} alt="Candlepic"/>
        <form onSubmit={submitHandler}>
            <p className="title">Customer Sign Up</p>
            <br></br>
            <div className="form-inner">
                <div className="form-group">
                    <img className='fname-logo' src={fname} alt="Fname-logo"/>
                    <input size="20" classname='inputs' type="text" name="fname" id="fname" placeholder="First Name" />
                </div>
                <br></br>
                <div className="form-group">
                    <img className='lname-logo' src={lname} alt="lname-logo"/>  
                    <input size="20" classname='inputs' type="text" name="lname" id="lname" placeholder="Last Name" />
                </div>
                <br></br>
                <div className="form-group">
                    <img className='username-logo' src={username} alt="username-logo"/>  
                    <input size="20" classname='inputs' type="text" name="username" id="username" placeholder="Username" />
                </div>
                <br></br>
                <div className="form-group">
                    <img className='email-logo' src={emaillogo} alt="Email logo"/>
                    <input size="20" classname='inputs' type="text" name="login-email" id="login-email" placeholder="Email" onChange={(event) => {setRegisterEmail(event.target.value);}}/>
                </div>
                <br></br>
                <div className="form-group">
                    <img className='passkey-logo' src={passkey} alt="Password logo"/> 
                    <input size="20" className="inputs" type="password" name="login-password" id="login-password" placeholder="Password"  onChange={(event) => {setRegisterPassword(event.target.value);}}/>
                </div>
                <br></br>
                <input type="submit" value="Register Account"/>
                <br></br>
            </div>
        </form>
    </div>
        
    );
}

export default RegisterForm;



/*
    <div>
            <h3> Register New User Here </h3>
            <input placeholder=" Email..." onChange={(event) => {setRegisterEmail(event.target.value);}}/>
            <input placeholder=" Password.." onChange={(event) => {setRegisterPassword(event.target.value);}}/>
            <button onClick={register}>Register</button>
            <h4>User registered in : </h4>
            {user?.email}
            <button onClick={logout}>Sign out</button>
    </div>


*/