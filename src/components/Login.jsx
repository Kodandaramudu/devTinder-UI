import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogInForm, setIsLogInForm] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleData = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };
  const handleSignp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      return navigate("/profile");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data);
    }
  };

  return (
    <div className="bg-gradient-to-r from via-orange-200 p-8 rounded-lg shadow-lg card w-96 m-auto my-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{isLogInForm? "Log In": "SignUp"}</h2>
        {!isLogInForm && <> 
        <fieldset className="fieldset w-full">
          <input
            type="text"
            className="input focus:outline-none"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => {
            setFirstName(e.target.value);
            }}
          />
        </fieldset>
        <fieldset className="fieldset w-full">
          <input
            type="text"
            className="input focus:outline-none"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => {
            setLastName(e.target.value);
            }}
          /> 
        </fieldset> </>}
        <fieldset className="fieldset w-full">
          <input
            type="text"
            className="input focus:outline-none"
            placeholder="Email Id"
            required
            value={emailId}
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />
        </fieldset>
        <fieldset className="fieldset w-full">
          <input
            type={isPasswordVisible?"password":"text"}
            onClick={()=>setIsPasswordVisible(!isPasswordVisible)}
            className="input focus:outline-none"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </fieldset>
        <p className="text-red-600">{error}</p>
        <div className="card-actions">
          <button className="btn btn-neutral" onClick={isLogInForm?handleData: handleSignp}>
            {isLogInForm? "LogIn" :"SignUp"}
          </button>
        </div>
        <p className="cursor-pointer" onClick={()=>{setIsLogInForm((value)=>!value)}}>
          {isLogInForm ? "New User? SignUp Here" : "Existing User? Login Here"}</p>
      </div>
    </div>
  );
};

export default Login;
