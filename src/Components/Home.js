import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pen from "./Assets/pen.png";
import Nav from './Nav';
import bin from './Assets/bin.png'
const Home = (props) => {
  const getAllDocs = () => {
    const data = Object.keys(localStorage);
    return data;
  };
  const searchFilter = (e)=>{
     const val=e.target.value;
     let filter = Documents.filter(docname=>{
         return docname.toLowerCase().includes(val.toLowerCase());
     });
     setFiltered(filter);
  }
  const [Documents, setDocuments] = useState(getAllDocs);
  const [filtered, setFiltered]=useState(getAllDocs);
  const download=(html)=>{
    const blob=new Blob([html], {type:'text/html'});
    const download=URL.createObjectURL(blob);
    return download;
  }
  return (
    <React.Fragment>
      <center>
        <h1>Load A Document to edit in WebPad</h1>
        <label for="search" id="search_emoji">🔎 :</label><input id="search"type='text' placeholder="Search"style={{height:"30px", fontSize:"23px"}}onChange={searchFilter} />
        <div>
          <Link to="/editor">
            <button onClick={()=>props.clickProp(null)}className="DocumentGetter new">New Document</button>
          </Link>
          {filtered.map((ele) => (
            ele==="authuser"?"":
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link to={"/editor"}>
                <button
                  style={{ height: "50px" }}
                  className="DocumentGetter"
                  onClick={()=>props.clickProp(ele)}
                >
                  {ele}
                </button>
              </Link>
              <button onClick={()=>{
                  const toSet=localStorage.getItem(ele);
                  const p=prompt("New Name");
                  localStorage.setItem(p, toSet);
                  localStorage.removeItem(ele);
                  setDocuments(getAllDocs());
                  window.location="/"
              }}style={{ height: "50px", marginTop: "30px" }}>
                <img style={{ height: "45px" }} src={pen} />
              </button>
              <a href={download(localStorage.getItem(ele))} download={`${ele}.webpaddoc`}><button style={{height:"50px", fontSize:20, marginTop:"30px"}}>Download</button></a>
              <button style={{backgroundColor:"transparent", border:"0px", height:"50px", marginTop:"30px"}}onClick={()=>{localStorage.removeItem(ele);window.location="/"}}><img height="50"src={bin} /></button>
            </div>
          ))}
        </div>
      </center>
    </React.Fragment>
  );
};
export default Home;
