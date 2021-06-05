import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/nav.css';
import icon from './Assets/icon.png';
function Nav(){
    return(
        <nav>
            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink"to="/blogs">Published Blogs</Link>
            <Link className="navlink" to="/me">Your Blogs</Link>
            <Link className="navlink" to="/publish">Publish your webpaddoc</Link>
            <Link className="navlink"to="/login">Login</Link>
            <Link className="navlink" to="/signup">SignUp</Link>
            <button onClick={()=>{localStorage.removeItem("authuser");window.location="/"}} className="navlink" style={{marginRight:"50px", marginTop:"40px"}}>{localStorage.getItem("authuser")?<div>Logout<img src={icon} /></div>:"Signed in as guest"}</button>
            </nav>
    )
}
export default Nav;