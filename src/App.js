import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Main from './Components/Main';
import Home from './Components/Home';
import Listings from './Components/Listings';
import ReadBlog from './Components/ReadBlog';
import Signup from './Components/Signup';
function App(){
  const [pass, setPass]=useState(null);
  const [navtoart, setNavtoart]=useState({});
  return(
    <Router>
     <Switch>
       <Route path="/" exact>
          <Home clickProp={(getProp)=>{setPass(getProp)}}/>
       </Route>
       <Route path="/editor">
         <Main loadSomething={pass}/>
       </Route>
       <Route path="/blogs">
          <Listings confirmClick={(what)=>setNavtoart(what)}/>
       </Route>
       <Route path="/blog">
           <ReadBlog article={navtoart} />
       </Route>
       <Route path="/signup">
         <Signup />
       </Route>
     </Switch>
    </Router>
 )
}
export default App;