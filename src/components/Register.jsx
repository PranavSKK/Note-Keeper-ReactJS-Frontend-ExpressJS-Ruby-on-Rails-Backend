import React, {useState} from "react";
import App from "./App.jsx";
import Login from "./Login.jsx";
import axios from "axios";

function Register(){
    const [mobileNo, setmobileNo] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [isRegistered, setisRegistered] = useState(false)
    const BACKEND_SERVER = import.meta.env.VITE_BACKEND_ENDPOINT

    function handleChange(e){
        if(e.target.name === "name"){
            setName(e.target.value)
        }else if(e.target.name === "password"){
            setPassword(e.target.value)
        }else{
            setmobileNo(e.target.value)
        }
    }

    async function submit(){
       try{
        const body = {
            "name": name,
            "mobileNo": mobileNo,
            "password": password
        }
        const response = await axios.post(BACKEND_SERVER + "/user/signup", body)
        if(response.status === 200){
            alert("Sucessfully Registered Please Login")
            setisRegistered(true)
        }
       }catch(err){
            alert(err.response.data)
       } 
    };

    return (
        isRegistered ? <Login /> : (
            <div className="login">
                <h1>Please Register To Note Keeper!</h1>
                <input name="name" placeholder="Enter Your Name" className="input" onChange={handleChange} value={name}></input>
                <input name="mobile" placeholder="Enter Your Mobile No" className="input" onChange={handleChange} value={mobileNo}></input>
                <input name="password" placeholder="Enter Your Password" className="input" onChange={handleChange} value={password}></input>
                <button name="signin" onClick={submit}>Sign up</button>
            </div>)
    )
};

export default Register;