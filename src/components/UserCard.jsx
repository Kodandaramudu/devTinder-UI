import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ userData }) => {

  const { _id,firstName, lastName, photoUrl, about, gender, age, skills } = userData;
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const dispatch = useDispatch();


  const handleSendRequest = async (status,userId) =>{
      try{

        const res = await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{
          withCredentials:true
        });
        dispatch(removeUserFromFeed(userId));
        setToastMessage(res?.data?.message)
        setToast(true);
        setTimeout(() => {
          setToast(false);
        }, 2000);
      }
      catch(err){
        console.error(err);
      }
    }

    if(!userData) return;
    if(userData.length === 0){
      return <h2>No feed Available</h2>
    }

  return ( 
    <div>
      <div className="card w-96 shadow-sm my-4">
      {toast && (
          <div className="alert alert-success">
            <span>{toastMessage}</span>
          </div>
        )}
        <div className="avatar justify-center">
          <div className="ring-primary ring-offset-base-100 w-52 h-52 rounded-full ring ring-offset-2">
            <img src={photoUrl} />
          </div>
        </div>
        <div className="card-body ">
          <h2 className="card-title inline-flex">
            {firstName + " " + lastName}
          </h2>
          <div className="space-x-5">
            <span>{age}</span>
            <span>{gender}</span>
          </div>

          <div>
            <p className="line-clamp-3">{about}</p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-soft btn-success"
            onClick={()=>handleSendRequest("interested",_id)}>interest</button>
            <button className="btn btn-soft btn-error"
             onClick={()=>handleSendRequest("ignored",_id)}>ignore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
