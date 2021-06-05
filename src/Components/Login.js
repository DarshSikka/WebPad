import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Styles/abc.css'
function Login(props){
    const [err, setErr]=useState("");
    return(
        <center>
             <h1>Login to WebPad</h1>
            <Link to="/"><button class="h" style={{height:"40px", fontSize:"30px"}}>Home</button><br /></Link><br />
        <form onSubmit={e=>{
            e.preventDefault();
            const uname=e.target[0].value;
            const pword=e.target[1].value;
            console.log(uname, pword);
            fetch(`https://backend-notepad.herokuapp.com/auth/login?name=${uname}&password=${pword}`).then(res=>res.text()).then(result=>{
                console.log(result);
                if(result==="Authenticated"){
                      setErr("All set You are logged in");
                      localStorage.setItem("authuser", e.target[0].value);
                }
                else{
                    setErr("Our backend told us that you are not authorized");
                }
            });
            }}>
            <label style={{fontSize:20,color:err==="All set You are logged in"?"green":"red"}}>{err}</label><br />
            <input placeholder="User Name"className="form"name="name" type="text"/><br />
            <input placeholder="Password"className="form"name="password" type="password"/><br />
            <input style={{fontSize:30}}type="submit" value="Login"/>
            </form>
        </center>
    )
}
export default Login;