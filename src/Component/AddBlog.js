




import React, { useContext, useState } from 'react';
import Contextblog from '../Content/Blog/Contextblog';
// import Blogs from './Blogs';

const AddBlog = () => {
    const context = useContext(Contextblog);
   
      const { addblogs } = context; ;
    
    const [blogs, setblogs] = useState( {title:"", description:"", tag: ""});

    const handleClick = (e) => {
        e.preventDefault();
       addblogs(blogs.title, blogs.description, blogs.tag);
        setblogs({ title: "", description: "", tag: "" });
    }

    const onChange = (e) => {
        setblogs({ ...blogs, [e.target.name]: e.target.value });
    }


    return (
      

        <div className="container my-3">
                        

            <h2>Create Blog</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={blogs.title} onChange={onChange}  minLength={5}  required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={blogs.description} onChange={onChange}  minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={blogs.tag} onChange={onChange}  minLength={5} required />
                </div>
              <button disabled={blogs.title.length<5 || blogs.description.length<5} type="submit" className='btn btn-primary'onClick={handleClick}>Add Blog</button>

            </form>
        </div>
    )
    
}

export default AddBlog;

    