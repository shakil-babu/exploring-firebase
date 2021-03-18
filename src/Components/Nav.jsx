import React from 'react'
import './Nav.css';
const Nav = ({signOut, userDetails}) => {
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
                <p>Hey welcome, {userDetails.email}</p>
                <button onClick={signOut}>Sign out</button>
                </div>
            </nav>   
        </>
    )
}

export default Nav
