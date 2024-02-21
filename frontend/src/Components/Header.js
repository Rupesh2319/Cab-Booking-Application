import React from "react"
import '../App.css';
import logo from "./image/logo.png"
import { useNavigate  } from "react-router";
// import IsAuthenticated from "./Components/Login";


export default function Header(props){
    const navigate = useNavigate();
    function logoutUser() {
        localStorage.clear();
        window.location.reload();
        navigate("/");
    }
    

    return(
        <div className="header">
            <div className="logo">
               <a href="/"><img src={logo}/></a> 
            </div>
            <div>
                <ul className="menu">
                <li>About us</li>
                <li>Service</li>
                <li>Steps</li>
                <li><a href="/book">Book Now</a></li>
                {!props.authenticate ? <li><a href="/login"><button>Login</button></a></li>
                :<li><a href="#"><button onClick={logoutUser}>Logout</button></a></li>}
                
                
                </ul>
            </div>
        </div>
    )
}