import React from "react";

const UserCard = ({ userData }) => {
  const { firstName, lastName, photoUrl, about, gender, age, skills } =
    userData;

  return ( 
    <div>
      <div className="card w-96 shadow-sm">
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
            <button className="btn btn-soft btn-error">Ignore</button>
            <button className="btn btn-soft btn-success">Interest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
