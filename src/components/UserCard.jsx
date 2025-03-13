import React from "react";

const UserCard = ({ userData }) => {
  const { firstName, lastName, photoUrl, about, gender, age, skills } =
    userData;

  return (
    <div>
      <div className="card bg-[#0a192f] text-gray-300 w-96 shadow-sm">
        <figure>
          <img className="p-4 rounded-2xl" src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title inline-flex">
            {firstName + " " + lastName}
          </h2>
          <div>
            <p>{about}</p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
