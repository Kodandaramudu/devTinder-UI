import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import { BASE_URL } from "../utils/constant";

const Connections = () => {
  const connectionRequests = useSelector((store) => store.connection);

  const dispatch = useDispatch();

  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getConnections();
  }, []);

  return (
    connectionRequests && (
      <div className="text-center justify-center">
        <h1 className="text-2xl font-bold">Connections</h1>
        {connectionRequests.map((connection) => {
          const { _id,firstName, lastName, photoUrl, age, skills, about } =
            connection;
          return (
            <div
              key={_id}
              className="card w-1/2 bg-gray-300 my-2 card-sm shadow-sm mx-auto items-center"
            >
              <div className="card card-side bg-base-100 shadow-sm m-auto h-32">
                <figure className="">
                  <img src={photoUrl} alt="photo" />
                </figure>
                <div className="card-body">
                  <h2 >{firstName+" "+lastName}</h2>
                  <h3>{age}</h3>
                  <h3>{skills}</h3>
                  <p>{about}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Connections;
