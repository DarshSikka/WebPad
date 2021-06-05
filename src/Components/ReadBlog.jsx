import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
const ReadBlog=(props)=>{
  return(
  <div>
     <h1>{props.article.blog_title}</h1>
     <h2>Posted at : {props.article.posted_at}</h2>
     <h2>Last Update: {props.article.last_updated_at}</h2>
     <p dangerouslySetInnerHTML={{__html:props.article.blog_text}}></p>
  </div>)
}
export default ReadBlog;