import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Main from './Components/Main';
import Home from './Components/Home';
import Listings from './Components/Listings';
import ReadBlog from './Components/ReadBlog';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Publish from './Components/Publish';
import UserBlogs from './Components/UserBlogs';
import Update from './Components/Update';
import Nav from './Components/Nav'
function App(){
  const [pass, setPass]=useState(null);
  const [navtoart, setNavtoart]=useState({});
  const [navton, setNavton]=useState({});
  return(
    <Router>
      <Nav />
      <center><h1 className="he">WebPad</h1></center>
     <Switch>
       <Route path="/" exact>
          <Home clickProp={(getProp)=>{setPass(getProp)}}/>
       </Route>
       <Route path="/WebPad" exact>
          <Home clickProp={(getProp)=>{setPass(getProp)}}/>
       </Route>
       <Route path="/editor">
         <Main loadSomething={pass}/>
       </Route>
       <Route path="/blogs">
          <Listings confirmClick={what=>{setNavtoart(what)}}/>
       </Route>
       <Route path="/blog">
           <ReadBlog article={navtoart} event={n=>setNavton(n)}/>
       </Route>
       <Route path="/signup">
         <Signup />
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       <Route path="/publish">
          <Publish />
       </Route>
       <Route path="/me">
         <UserBlogs confirmClick={what=>{setNavtoart(what)}}/>
       </Route>
       <Route path="/update">
            <Update nam={navton.blog_title}/>
       </Route>
     </Switch>
    </Router>
 )
}
export default App;