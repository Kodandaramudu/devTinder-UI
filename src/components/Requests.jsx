import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requestsList = useSelector((store) => store.request);

  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });
      dispatch(addRequest(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  const requestReview = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getRequests();
  }, []);

  if (!requestsList) return;

  if (requestsList.length === 0) {
    return (
      <div className="flex justify-center text-3xl font-bold my-10 text-white">
        No Requests Found
      </div>
    );
  }
  return (
    requestsList && (
      <div className="text-center justify-center ">
        <h1 className="text-2xl font-bold">Requests</h1>
        {requestsList.map((request) => {
          const {
            _id,
            firstName,
            lastName,
            photoUrl,
            age,
            gender,
            skills,
            about,
          } = request.fromUserId;
          return (
            <div
              key={_id}
              className="card w-1/2 bg-gray-300 my-2 card-sm shadow-sm mx-auto items-center"
            >
              <div className="card card-side bg-base-100 shadow-sm m-auto h-44">
                <figure className="">
                  <img src={photoUrl} alt="photo" />
                </figure>
                <div className="card-body">
                  <h2>{firstName + " " + lastName}</h2>
                  {age && gender && about && (
                    <div>
                      <span>{age + " " + gender}</span>
                    </div>
                  )}
                  <p>{about}</p>
                  <p>{skills.join(" , ")}</p>
                </div>
                <div className="card-actions my-auto justify-center p-2">
                    <button
                      className="btn btn-soft btn-success"
                      onClick={() => requestReview("accepted", request._id)}
                    >
                      accept
                    </button>
                    <button
                      className="btn btn-soft btn-error"
                      onClick={() => requestReview("rejected", request._id)}
                    >
                      reject
                    </button>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Requests;
