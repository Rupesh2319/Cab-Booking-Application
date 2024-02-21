import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../App.css";



export default function LoginSignUp() {
  const baseurl = "http://localhost:8080/api/users";
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone:"",
    password: "",

  });

  // const {uname,uemail,upass} = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e)=>{
    e.preventDefault();
    createUser();
  }
  
  function createUser() {
     axios.post(baseurl , {
        
        role:"user",
        name:data.username,
        password:data.password,
        email:data.email,
        phone:data.phone
    }).then((response)=>{
      console.log(response)
      navigate("/");
    }  )
    .catch((err) => {
    console.log(err)
});
    
  }


  return (
    <div className="container">
      <div className="text">
        <h1>SignUp</h1>
      </div>
      <div className="inputs">
        <form onSubmit={handelSubmit} >
          <div className="input">
            {/* <p>Name</p> */}
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={data.username}
              onChange={changeHandler}
            />
          </div>
          <div className="input">
            {/* <p>Email</p> */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={changeHandler}
            />
          </div>
          <div className="input">
            {/* <p>Password</p> */}
            <input
              type="Integer"
              placeholder="Phone Number"
              name="phone"
              value={data.phone}
              onChange={changeHandler}
            />
          </div>
          <div className="input">
            {/* <p>Password</p> */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={changeHandler}
            />
          </div>
          <div className="submit-container">
            <button className="submit button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
