import './Homestyle.css';
import AddBlog from './AddBlog';
import Blogs from './Blogs';
import Contextblog from '../Content/Blog/Contextblog';
import { Link } from 'react-router-dom';
import Blogging from './Blogging';

import React, { useContext, useEffect, useRef, useState } from 'react'


const Home = () => {



  // const context=useContext(Contextblog);
  // const{blogs, getBlogs ,editBlog}=context;
  // useEffect(()=>{
  //     getBlogs()
  // },[])
  // const ref=useRef(null)
  // const refClose=useRef()
  // const [blog,setblog]=useState({id:"", etitle:"" , edescription:"",etag:""})

  // const edit=(currentBlog)=>{
  //     ref.current.click();
  //     setblog({id:currentBlog._id, etitle:currentBlog.title , edescription:currentBlog.description , etag:currentBlog.tag})
  // }

  // const handleClick=(e)=>{
  //     editBlog(blog.id ,blog.etitle, blog.edescription , blog.etag)
  //     refClose.current.click();
  // }
  // const onChange=(e)=>{
  //     setblog({...blog,[e.target.name]:e.target.value})
  // }













 
  return (
    
    <div className='contaner'>
     
<div id="carouselExampleCaptions" className="carousel slide">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" className="d-block w-100" alt="..." height={300} />
      <div className="carousel-caption d-none d-md-block">
        <h5>BLOG</h5>
        <p>Let's Explore your self </p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://shoutem.com/wp-content/uploads/2022/05/How-To-Make-A-Blog-Mobile-App-In-3-Easy-Steps.jpg" className="d-block w-100" alt="..." height={300}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 >BLOG</h5>
        <p>Let's Explore your self</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80" className="d-block w-100" alt="..." height={300}/>
      <div className="carousel-caption ">
        <h1>BLOG</h1>
        <p>Let's Explore your self</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <Link className="btn btn-primary mx-1" to="/blogs" role="button">Cretae Blogs</Link>
{/* <Link to="/blogs" className="btn btn-primary">Create Blog</Link>   */}


 <Blogs/>  
</div>

{/* <div className="row my-3">
                <h2>You Blog</h2>
                <div className="container mx-2"> 
                {blogs.length===0 && 'No Blogs to display'}
                </div>
                {blogs.map((blog) => {
                    return <  Blogging key={blog._id} edit={edit} blog={blog}/>
                })}
            </div> */}

  </div>
  
  )

 
}

export default Home
