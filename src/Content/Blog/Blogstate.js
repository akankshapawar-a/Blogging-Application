import Contextblog from './Contextblog';
import { useState } from "react";

const Blogstate=(props) => {
    const host="http://localhost:5000"
    const blogsInitial=[]
    const [blogs , setblogs]=useState(blogsInitial)

    const getBlogs=async() =>{
        const response= await fetch(`${host}/api/notes/fetchblog`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmY2I2MjIxY2I5ODViMzAzMWE1Y2YzIn0sImlhdCI6MTY5NDI4MzI5OH0.pN1W5BkJROARISPxb9LrWqy9CrwR666_DnYITAo4MPY"
            }
        });
        const json=await response.json()
        setblogs(json)
    }

    const addblogs = async(title ,description,tag)=>{
        const response=await fetch(`${host}/api/notes/addblogs`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmY2I2MjIxY2I5ODViMzAzMWE1Y2YzIn0sImlhdCI6MTY5NDI4MzI5OH0.pN1W5BkJROARISPxb9LrWqy9CrwR666_DnYITAo4MPY"
            },
            body:JSON.stringify({title,description,tag})
        });

        const blog=await response.json();
        setblogs(blogs.concat(blog))
    }

    const deleteblog =async(id) =>{
        const response =await fetch(`${host}/api/notes/deleteblog/${id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmY2I2MjIxY2I5ODViMzAzMWE1Y2YzIn0sImlhdCI6MTY5NDI4MzI5OH0.pN1W5BkJROARISPxb9LrWqy9CrwR666_DnYITAo4MPY"
            }
        });
        const json =response.json();
        const newBlogs=blogs.filter((blog)=>{ return blog._id!==id})
        setblogs(newBlogs)
    }


    const editBlog=async(id,title,description,tag) =>{
        const response=await fetch(`${host}/api/notes/edit/${id}`,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmY2I2MjIxY2I5ODViMzAzMWE1Y2YzIn0sImlhdCI6MTY5NDI4MzI5OH0.pN1W5BkJROARISPxb9LrWqy9CrwR666_DnYITAo4MPY"
            },
            body:JSON.stringify({title,description,tag})
        });
        const json=await response.json();

        let newBlogs=JSON.parse(JSON.stringify(blogs))


        for(let index=0;index<newBlogs.length;index++){
            const element=newBlogs[index];
            if(element._id ===id){
                newBlogs[index].title=title;
                newBlogs[index].description=description;
                newBlogs[index].tag=tag;
                break;
            }
        }
        setblogs(newBlogs);
    }
    return(
        <Contextblog.Provider value={{blogs ,addblogs,deleteblog,editBlog,getBlogs}}>
            {props.children}
        </Contextblog.Provider>
    )
}

export default Blogstate;
