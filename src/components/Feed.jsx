import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);

  const getFeed = async () => {
    try {
      if (feedData) return;
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  if(!feedData) return;
  if(feedData.length === 0){
    return <h1 className="font-bold text-2xl flex justify-center my-10">No Feed Available</h1>
  }

  return (
    feedData && (
      <div className="grid place-items-center my-12 rounded-2xl text-white">
        <UserCard  userData={feedData[0]}/>
      </div>
    )
  );
};

export default Feed;
