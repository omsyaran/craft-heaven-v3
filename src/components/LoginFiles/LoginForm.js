import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/Users/omsyaran/Desktop/craft-heaven-v3/src/firebase-config";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

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


    return(
        <form onSubmit={submitHandler}>
            <input placeholder=" Email..." onChange={(event) => {setLoginEmail(event.target.value);}}/>
            <input placeholder=" Password.."  onChange={(event) => {setLoginPassword(event.target.value);}}/>
            <input type="submit" value="Sign In"/>
            <h4>User registered in : </h4>{user?.email}
        </form>
    );
}

export default LoginForm;



/*
        <div>
            <h3> Login Here </h3>
            <input placeholder=" Email..." onChange={(event) => {setLoginEmail(event.target.value);}}/>
            <input placeholder=" Password.."  onChange={(event) => {setLoginPassword(event.target.value);}}/>
            <button onClick={login}>Login</button>
            <h4>User registered in : </h4>{user?.email}
        </div>
*/