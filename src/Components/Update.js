import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav'
function Publish(props){
    const [data, setData]=useState("");
    const [title, setTitle]=useState("");
    return(
        <React.Fragment>
            <Nav />
            <h1>Update {props.nam} by {localStorage.getItem("authuser")}</h1>
            <form method="POST"action={`https://backend-notepad.herokuapp.com/blogs/edit/${localStorage.getItem("authuser")}/${props.nam}`}onSubmit={e=>{
                const user=localStorage.getItem("authuser");
                if(!user){
                    e.preventDefault();
                    alert("Not logged in")
                }
                else if(!data){
                    e.preventDefault();
                    alert("No File uploaded!");
                }
            }}method="POST"style={{textAlign:"left"}}method="POST">
            <label>Title:</label>
            <input hidden value={localStorage.getItem("authuser")?localStorage.getItem("authuser"):"Sign in to Publish!"} name="login"/>
            <input value={title} onChange={e=>setTitle(e.target.value)}type="text" placeholder="Title" name="title"/>
            <label>Upload webpaddoc:</label><input type="file" onChange={e=>{
                const reader=new FileReader();
                reader.onload=(eve)=>{
                    const result=eve.target.result;
                    setData(result);
                }
                reader.readAsText(e.target.files[0]);
            }}/>
            <p dangerouslySetInnerHTML={{__html:data}}></p>
            <textarea hidden name="txt"value={data}></textarea>
            <button type="submit"
            >Publish</button>
            </form>
        </React.Fragment>
    )
}
export default Publish