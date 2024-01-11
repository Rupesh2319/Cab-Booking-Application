import {rect , useEffect, useState} from "react";
import axios from "axios";

const baseurl = "http://localhost:8080/api/users";


export default function Userdata(){
    const [Userdata , setUserdata] = useState(data)
    
    useEffect(()=>{
        axios.get(baseurl).then((response)=>{
            setUserdata(response.data)
        })
    },[])
    
    return(Userdata);
}


