import React from "react";
//import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TaskServices from "./Services/TaskServices";

function Login(){
    let navigate = useNavigate();

    const [username, setname] =useState("");
    const[password, setpassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        TaskServices.login(username,password).then(Response =>{
            console.log(Response)
            if(Response.data === true){
                alert("Your Login successful");
                navigate('/home')
            }
            else{
                alert("please enter vaild name and password");
                navigate('/')
            }
        })
    }
    return(
        <div>

        <div className="Login">
        <h2 style={{textAlign:"center"}}>Login</h2>
        <form onSubmit={handleSubmit} style= {{textAlign:"center"}}>
            <fieldset>
                <div>UserName:
                    <input type="text"
                    name = "username"
                    value={username}
                    onChange={(e) => setname(e.target.value)}
                    />
                </div>
                <div>
                    password:
                    <input type = "text"
                    name ="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </fieldset>
        </form></div>
        </div>
    );
}
export default Login;