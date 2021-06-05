import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './abc.css'
function Signup(props){
    const [nam, setName]=useState("");
    const [password, setPassword]=useState("");
    const [confirm, setConfirm]=useState("");
    return(
        <form method="POST" action="http://localhost:3002/auth/signup">
            <input placeholder="User Name"className="form"value={nam} onChange={e=>setName(e.target.value)}type="text" name="name"/><br />
            <input placeholder="Password"className="form"value={password} onChange={e=>setPassword(e.target.value)}type="password" name="password"/><br />
            <input placeholder="Confirm password"className="form"value={confirm} onChange={e=>setConfirm(e.target.value)}type="password" name="confirm"/><br />
            <input className="form"type="submit" value="Sign Up" />
        </form>
    )
}
export default Signup