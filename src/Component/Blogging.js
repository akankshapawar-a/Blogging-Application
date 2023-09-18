import React,{useContext}from 'react';
import Contextblog from "../Content/Blog/Contextblog";
import './style.css';

const Blogging=(props)=>{
    const context=useContext(Contextblog);
    const {deleteblog}=context;
    
    const {blog, edit}=props;

    return(
        <div className="col-md-3">
         {/* <div className="card my-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{blog.title}</h5>
              <i className="far fa-trash-alt mx-2" onClick={() => { deleteblog(blog._id);  }}></i>
              <i className="far fa-edit mx-2" onClick={() => {edit(blog); }}></i>
            </div>
            <p className="card-text">{blog.description}</p>
          </div>
        </div>  */}

<div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{blog.title}</h5>
              <i className="far fa-trash-alt mx-2" onClick={() => { deleteblog(blog._id);  }}></i>
              <i className="far fa-edit mx-2" onClick={() => {edit(blog); }}></i>
  </div>
  <p className="card-text">{blog.description}</p>

</div> 
      </div>

    );
};
export default Blogging;