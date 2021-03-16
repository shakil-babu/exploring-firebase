import React, { useState } from 'react'
import './App.css';
import Nav from './Components/Nav';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);
const App = () => {
  const [user, setUser] = useState({isLogged:false, name: '', email: '' , photo: ''})
  const signInHandler = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) =>{
        const {displayName, email , photoURL} = result.user ;
        setUser({isLogged:true,name: displayName , email:email, photo:photoURL})
    })

  }

  const signOut = () => {
    firebase.auth().signOut()
    .then(res => {
      setUser({isLogged:false, name:'', email:'',photo:''})
    })
  }

  return (
    <div>
        <Nav signIn = {signInHandler} user = {user} signOut = {signOut} />
    </div>
  )
}

export default App
