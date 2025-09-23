import axios from "axios";
import React, {useState} from "react";
import App from "./App.jsx";
import Register from "./Register.jsx";

function Login(){
    const BACKEND_SERVER = import.meta.env.VITE_BACKEND_ENDPOINT
    const [mobileNo, setmobileNo] = useState("")
    const [password, setPassword] = useState("")
    const [isloggedIn, setisloggedIn] = useState(false)
    const [isRegister, setisRegister] = useState(false)

    function handleChange(e){
        if(e.target.name === "mobile"){
            setmobileNo(e.target.value)
        }else{
            setPassword(e.target.value)
        };
    }

    async function submit(){
        try{
            const body = {
                "mobileNo": mobileNo,
                "password": password
            }
            const response = await axios.post(BACKEND_SERVER + '/user/signin', body)
            if(response.status === 200){
                setisloggedIn(true)
            }
        }catch(err){
                alert(err.response.data)
        }
    };

    return  (
            isloggedIn ? (<App />) : (isRegister ? (<Register onBack={()=>setisRegister(false)} />) :(<div className="login">
                    <h1>Hi Welcome To Note Keeper!</h1>
                    <input name="mobile" placeholder="MobileNo" className="input" onChange={handleChange} value={mobileNo}></input>
                    <input name="password" placeholder="Password" className="input" onChange={handleChange} value={password}></input>
                    <button name="signin" onClick={submit}>Sign In</button>
                    <button onClick={()=>setisRegister(true)}>Register</button>
                </div>))
    )    
};

export default Login;