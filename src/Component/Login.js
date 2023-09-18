/* 

import './style.css';
import React,{useState,setItems,useEffect} from 'react';
import { Navigate,useNavigate} from 'react-router-dom';
const Login = (props) => {
  const[credentials ,setCredentials]=useState({email:"",password:""})
  let history = useNavigate();

  const handleSubmit=async(e)=>{
e.preventDefault();
const response = await fetch("http://127.0.0.1:5000/api/auth/login", {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({email: credentials.email, password: credentials.password})
});
const json = await response.json()
console.log(json);
if (json.success){//

  JSON.parse(localStorage.setItem('token', JSON.authtoken)); 
  history.push("/");
  
}

// useEffect(() => {
//   const items = JSON.parse(localStorage.getItem('items'));
//   if (items) {
//    setItems(items);
//   }
// }, []);





else{
  alert("Inavlid Credentials");
}

  }
const onChange=(e)=>{
  setCredentials({...credentials,[e.target.name]:e.target.value})
}

  return (
    <div className='color'>
      <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://thumbs.dreamstime.com/z/blog-world-d-illustration-31262699.jpg?w=992"
                alt="login form" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color:" #ff6219"}}></i>
                    <span className="h1 fw-bold mb-0">Blogs</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="email"  className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" />
                    <label className="form-label" htmlFor="email">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>
                  
              <a className="small text-muted" to="/">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color:" #393f81"}}>Don't have an account? <a href="\" style={{color:" #393f81"}}>Register here</a></p>
                  <a href="\" className="small text-muted">Terms of use.</a>
                  <a href="\" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login
*/

import './style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
       
const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });


      const json = await response.json();
      console.log(json);

     
        localStorage.setItem('token', json.authtoken);
      navigate('/');
      
    } catch (error) {
      console.error('Error fetching data:', error);
      alert("An error occurred while connecting to the server. Please try again later.");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className='color'>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://thumbs.dreamstime.com/z/blog-world-d-illustration-31262699.jpg?w=992"
                      alt="login form" className="img-fluid" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: " #ff6219" }}></i>
                          <span className="h1 fw-bold mb-0">Blogs</span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5>
                        <div className="form-outline mb-4">
                          <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" />
                          <label className="form-label" htmlFor="email">Email address</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                        </div>
                        <a className="small text-muted" href="/">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{ color: " #393f81" }}>Don't have an account? <a href="/" style={{ color: " #393f81" }}>Register here</a></p>
                        <a href="/" className="small text-muted">Terms of use.</a>
                        <a href="/" className="small text-muted">Privacy policy</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login;

