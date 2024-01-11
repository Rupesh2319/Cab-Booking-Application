import { React, useState , useEffect } from "react";
import { useNavigate  } from "react-router";
import axios from "axios";
import "../App.css";
import Hero from "./Hero";

export default function Login() {
  const baseurl = "http://localhost:8080/api/users";
  const [IsAuthenticated,setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  
  const [data, setData] = useState({
    username:"",
    password:"",
  });
  const [Userdata , setUserdata] = useState([])
  useEffect(()=>{
    axios.get(baseurl).then((response)=>{
        setUserdata(response.data._embedded.users)
    })
},[])

  const changeHandler = (e) => {
    
    setData({ ...data, [e.target.name]: e.target.value })
    
  };



  function checkUser(){
    const usercheck = Userdata.find(user => (user.name===data.username && user.password===data.password))
    if(usercheck){
      console.log(usercheck.id + "....");
        localStorage.setItem('user',JSON.stringify(data))
        localStorage.setItem('authenticate',true)
        const id = usercheck.id;
        localStorage.setItem('id' , id)
        navigate("/");
        window.location.reload();

        

    }else{
      alert('Please Enter the Right Details')
    }
  }


  const handelSubmit = (e) => {
    e.preventDefault();
    checkUser();
    


  };

  return (
    <div className="container">

      <div className="inputs">
      <div className="text">
        <h1>Login</h1>
      </div>
        <form onSubmit={handelSubmit}>
          <div className="input">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={data.username}
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
            <button className="submit button">login</button>
            {/* <a herf="/signUp"><button className="buttons">Sign Up</button></a> */}
          </div>
        </form>
      </div>
    </div>
  );
}
