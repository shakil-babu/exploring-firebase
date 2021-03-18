import React from 'react'
import './Form.css';
const Form = ({isSignIn,setIsSignIn,errors,setErrors,userInfo,setUserInfo,success,setSuccess,BlurHandler,handleSignIn,handleSignUp}) => {
   
    return (
      <section className='form-main-area'>
        <div className="form-area">
          <h3>User Sign {!isSignIn ? "Up" : "In"}</h3>
  
            {!isSignIn && (
              <div className="">
                <label htmlFor="name">Name:</label>
                <br />
                <input onBlur={BlurHandler} type="text" name="name" placeholder="User name" />
                {errors.isError? <span style={{color:'red'}}>{errors.forName}</span>:''}
                <br />
              </div>
            )}
            <label htmlFor="email">Email:</label>
            <br />
            <input onBlur={BlurHandler} type="email" name="email" placeholder="User email" />
            <br />
            <label htmlFor="password">Password: </label>
            <br />
            <input onBlur={BlurHandler}
              type="password"
              name="password"
              placeholder="User password"
            />
            {errors.isError? <span style={{color:'red', marginBottom:'5px'}}>{errors.forPass}</span>:''}
            <br />
            {!isSignIn ? (
              <button type="submit" className='button' onClick={handleSignUp}  >Sign Up</button>
            ) : (
              <button type="submit" className='button' onClick = {handleSignIn} >Sign In</button>
            )}
          {!isSignIn ? (
            <div className="form-info">
              <p>Already have an account? </p>{" "}
              <button onClick={() => setIsSignIn(true)}>Sign In</button>
            </div>
          ) : (
            <div className="form-info">
              <p>Create an account- </p>{" "}
              <button onClick={() => setIsSignIn(false)}>Sign Up</button>
            </div>
          )}
          {success.active ? <span style={{color:'green', fontSize:"17px", textAlign:'center'}}>{success.msg}</span>:""}
        </div>
      </section>
    );
}

export default Form
