import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/LoginFiles/Login';
import Signup from './components/RegisterFiles/Signup';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBE4YENtriHkVh5Gbucyy4ipINyIzR4RHk",
    authDomain: "crafthaven-om.firebaseapp.com",
    projectId: "crafthaven-om",
    storageBucket: "crafthaven-om.appspot.com",
    messagingSenderId: "882716555478",
    appId: "1:882716555478:web:0d22bf90b572b4cf4d7177",
    measurementId: "G-09BKG4H6KF"
};

initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

