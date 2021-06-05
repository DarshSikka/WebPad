import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Styles/abc.css'
function Signup(props){
    const [nam, setName]=useState("");
    const [password, setPassword]=useState("");
    const [confirm, setConfirm]=useState("");
    return(
        <React.Fragment>
            <center><h1>Sign Up to WebPad</h1><Link to="/"><button style={{height:"50px", fontSize:30}}>Home</button></Link></center>
        <form method="POST" action="https://backend-notepad.herokuapp.com/auth/signup">
            <input placeholder="User Name"className="form"value={nam} onChange={e=>setName(e.target.value)}type="text" name="name"/><br />
            <input placeholder="Password"className="form"value={password} onChange={e=>setPassword(e.target.value)}type="password" name="password"/><br />
            <input placeholder="Confirm password"className="form"value={confirm} onChange={e=>setConfirm(e.target.value)}type="password" name="confirm"/><br />
            <input className="form"type="submit" value="Sign Up" />
        </form>
        </React.Fragment>
    )
}
export default Signup