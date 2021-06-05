import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Listings.css'
const Listings=(props)=>{
   const [data, setData]=useState([])
   const getListings=async()=>{
      const result=await (await fetch("https://backend-notepad.herokuapp.com/blogs")).json();
      return await result;
   }
   useEffect(()=>{
   getListings().then(ans=>{
    setData(ans);
    })})
   return(
       <div class="container">
         {data.map(ele=><React.Fragment><Link to="/blog"><button className="Listing" onClick={props.confirmClick(ele)}>{ele.blog_title} by {ele.posted_by}</button></Link><br /></React.Fragment>)}
       </div>
   )
}
export default Listings;