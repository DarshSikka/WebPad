import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
const ReadBlog=(props)=>{
  return(
  <div>
    <center>
     <h1>{props.article.blog_title} by {props.article.posted_by}</h1>
     <h2>Posted at : {props.article.posted_at}</h2>
     <h2>Last Update: {props.article.last_updated_at}</h2>
     </center>
     <p style={{backgroundColor:"white"}}dangerouslySetInnerHTML={{__html:props.article.blog_text}}></p>
     {console.log(props.article.blog_text)}
     <center>{props.article.posted_by===localStorage.getItem("authuser")?<Link to="/update"><button onClick={()=>props.event(props.article)}>Edit this</button></Link>:""}</center>
  </div>
  )
}
export default ReadBlog;