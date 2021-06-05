import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pen from "./Assets/pen.png";
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
  return (
    <React.Fragment>
    <nav><Link to="/blogs">Our Community Blogs</Link></nav>
      <center>
        <h1>Load A Document to edit in WebPad</h1>
        <label for="search" id="search_emoji">🔎 :</label><input id="search"type='text' placeholder="Search"style={{height:"30px", fontSize:"23px"}}onChange={searchFilter} />
        <div>
          <Link to="/editor">
            <button onClick={()=>props.clickProp(null)}className="DocumentGetter new">New Document</button>
          </Link>
          {filtered.map((ele) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link to={"/editor"}>
                <button
                  style={{ height: "70px" }}
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
                  setDocuments(getAllDocs);
              }}style={{ height: "70px", marginTop: "30px" }}>
                <img style={{ height: "65px" }} src={pen} />
              </button>
            </div>
          ))}
        </div>
      </center>
    </React.Fragment>
  );
};
export default Home;
