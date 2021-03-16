import React from 'react'
import './Nav.css';
const Nav = ({signIn, user, signOut}) => {
    const {isLogged, name, email , photo} = user ;
    return (
        <>
          <nav>
                <h3>Firebase Auth</h3>
                
                <div className="d-flex">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Products</a>
                </div>
                <div className="info">
                {isLogged && <p>Welcome, {name}</p> }
                    {isLogged && <img className='img' src={photo} alt=""/> }
                    {isLogged ? <button onClick={signOut}>Sign out</button> : <button onClick={signIn}>Sign in</button>}
                    
                </div>
            </nav>   
        </>
    )
}

export default Nav
