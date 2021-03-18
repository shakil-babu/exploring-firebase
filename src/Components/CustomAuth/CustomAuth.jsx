import React, { useEffect, useState } from 'react'
import Form from './Form/Form'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import Nav from '../Nav';
firebase.initializeApp(firebaseConfig);
const CustomAuth = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [errors, setErrors] = useState({forName:'', forEmail:'', forPass: '', isError:false})
    const [userInfo, setUserInfo] = useState({
        name:"",
        email:"",
        password:"",
    })
    const [userDetails, setUserDetails] =useState({email:''})
    const [user, setUser] = useState('');

    const [success, setSuccess] = useState({msg:'', active:false})
    const BlurHandler = (e) => {
        if(e.target.name === 'name'){
            setUserInfo({
                ...userInfo, name:e.target.value
            })
        }
        if(e.target.name === 'email'){
            setUserInfo({
                ...userInfo, email:e.target.value
            })
        }
        if(e.target.name === 'password'){
            setUserInfo({
                ...userInfo, password:e.target.value
            })
        }
    }


    setTimeout(() => {
        setSuccess({...success, active:false})
    }, 6000);
 


const handleSignUp= () => {
firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    if(userInfo.name == '' || ' ' && userInfo.name.length <= 3){
        setErrors({...errors, forName:'You should use minimum 3 character!', isError:true})
    }
    else if(userInfo.password.length < 5 || userInfo.forPass === ''){
        setErrors({...errors, forPass:'Password is not valid!'})
    }
    else{
        setErrors({...errors, isError:false})
        setSuccess({msg:"Successfully Created.", active:true})
        console.log(userInfo);
    }
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

 const handleSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  
 }

 const stateChanger = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setUser(user)
          setUserDetails({email:user.email})
          console.log(user);
        } else {
            setUser('')
        }
      });
      
 }
 useEffect(() => {
     stateChanger();
 }, [])

 const signOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
 }

    return (
        <div>
            {user ? (
                <Nav signOut ={signOut} userDetails={userDetails} />
            ):(
                <Form isSignIn={isSignIn}
                setIsSignIn ={setIsSignIn}
                errors={errors}
                setErrors={setErrors}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                success={success}
                setSuccess={setSuccess}
                BlurHandler ={BlurHandler}
                handleSignIn = {handleSignIn}
                handleSignUp ={handleSignUp}
                
                />
            )}
           
        </div>
    )
}

export default CustomAuth
