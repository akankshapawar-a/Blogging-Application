import './App.css';
import React from 'react';
import Login from './Component/Login';
//import { useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import ReactDOM from 'react-dom';
import Signup from'./Component/Signup';
import AddBlog from './Component/AddBlog';
import Contextblog from './Content/Blog/Contextblog';
import Blogstate from './Content/Blog/Blogstate';
import Blogs from './Component/Blogs';
function App() {
  




  return (
    <>
    <Blogstate>
     <Router>
<Navbar/>
<div className='container'>
     <Routes>
     <Route exact path="/signup" element={<Signup/>}/>
           
          
     <Route exact path="/login" element={<Login/>}>
           
           </Route>
     <Route exact path="/" element={<Home/>}>
           
     </Route>
     <Route exact path="/blogs" element={<Blogs/>}>
           
           </Route>
    

     
           
     <Route exact path="/addblogs" element={<AddBlog/>}>
           
           </Route> 

    
         
       <Route exact path="/about" element={ <About/>}>
           
          </Route>
          
          
        </Routes>
        </div>
     </Router>
     </Blogstate>
         
    </>
  );
}


export default App;
