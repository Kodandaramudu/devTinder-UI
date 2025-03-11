import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../userSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [emailId, setEmailId] = useState("kodandaramuduj@csk.com");
  const [password, setPassword] = useState("Ayyappaj@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleData = async () =>{
    try{
      const res = await axios.post("http://localhost:7777/login",{
        emailId,
        password
      },
    {
      withCredentials:true
    });
    dispatch(addUser(res.data.data));
    return navigate("/");
    }catch(err){
      console.error(err);
    }
  }
 

  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-lg card w-96 m-auto my-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Log In</h2>
        <fieldset className="fieldset">
          <input
            type="text"
            className="input"
            placeholder="Email Id"
            value={emailId}
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />
        </fieldset>
        <fieldset className="fieldset">
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => {
            setPassword(e.target.value);
            }}
          />
        </fieldset>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handleData}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
