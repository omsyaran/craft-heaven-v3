import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "/Users/omsyaran/Desktop/craft-heaven-v3/src/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

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

    const logout = async () => {
        await signOut(auth);
    }

    return(
        <div>
            <h3> Register New User Here </h3>
            <input placeholder=" Email..." onChange={(event) => {setRegisterEmail(event.target.value);}}/>
            <input placeholder=" Password.." onChange={(event) => {setRegisterPassword(event.target.value);}}/>
            <button onClick={register}>Register</button>
            <h4>User registered in : </h4>
            {user?.email}
            <button onClick={logout}>Sign out</button>
        </div>
    );
}

export default RegisterForm;