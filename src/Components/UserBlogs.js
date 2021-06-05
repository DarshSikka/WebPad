import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
function UserBlogs(props){
    const [dat, setdat]=useState([]);
    const getListings=async()=>{
        const result=await (await fetch(`https://backend-notepad.herokuapp.com/blogs/user/${localStorage.getItem("authuser")}`)).json();
        return await result;
     }
     useEffect(()=>{
     getListings().then(ans=>{
      setdat(ans);
      console.log(ans);
      })});
    return(
        <React.Fragment>
            <center>
        <div>
         {dat.map(ele=><React.Fragment><Link to="/blog"><button className="Listing" onClick={()=>props.confirmClick(ele)}>{ele.blog_title} by {ele.posted_by}</button></Link><br /></React.Fragment>)}
        </div>
        </center>
        </React.Fragment>
    )
}
export default UserBlogs;