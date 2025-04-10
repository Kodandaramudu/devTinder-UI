import React, { useEffect } from "react";
import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender||"Gender");
  const [about, setAbout] = useState(user?.about);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [error, setError] = useState("");
  const [showOtherGender,setShowOtherGender] = useState(false);
  const [toast, setToast] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (gender) => {
    if(gender === "others"){
      setShowOtherGender(true);
     }
    setGender(gender);
    }
  const handlePhotoChange = (e) =>{
    const file = e.target.files[0];
    if(file){
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
    }
  }

  const saveUserData = async () => {
    try {
      const res = await axios.put(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);
    } catch (err) {
      setTimeout(()=>{
        setError(err?.response?.data?.message)
      },2000);
    }
  };

  return (
    user && (
      <div className="grid my-4 place-items-center text-black">
        {toast && (
          <div className="alert alert-success">
            <span>Profile Saved Successfully</span>
          </div>
        )}
        <div className="sm:grid grid-cols-2 gap-4">
          <div className="w-full h-[500px] rounded-2xl flex items-center justify-center ">
            <div className="space-y-4">
              <fieldset className="fieldset">
                <input
                  type="text"
                  className="input"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <input
                  type="text"
                  className="input"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </fieldset>
              <div className="join w-[95%]">
              <input type="file"
               className="file-input file-input-neutral"
               placeholder="photo"
               onChange={handlePhotoChange} />
 
              </div>
              <fieldset className="fieldset">
                <input
                  type="text"
                  className="input"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn w-[90%] justify-start">
                    {gender}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-[90%] p-2 shadow-sm justify-start"
                  >
                    <li className="justify-start">
                      <a onClick={()=>handleClick("male")}>Male</a>
                    </li>
                    <li className="justify-start">
                      <a onClick={()=>handleClick("female")}>Female</a>
                    </li>
                    <li className="justify-start">
                      <a onClick={()=>handleClick("others")}>Others</a>
                    </li>
                  </ul>
                </div>
              </fieldset>
              {showOtherGender && <fieldset className="fieldset">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Your Gender"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </fieldset>}
              <fieldset className="fieldset">
                <textarea
                  rows={2}
                  className="textarea"
                  placeholder="about"
                  value={about}
                  onChange={(e) => {
                    setAbout(e.target.value);
                  }}
                />
              </fieldset>
              {error && (
                <div className="alert alert-error w-[90%]">
                  <span>{error}</span>
                </div>
              )}
              <button
                className="btn btn-soft mb-0 w-[150px] mx-24 hover:shadow-gray-500"
                onClick={saveUserData}
              >
                Save Profile
              </button>
            </div>
          </div>
          <div className="w-full h-[500px] rounded-2xl flex items-center justify-center">
            <UserCard
              userData={{ firstName, lastName, photoUrl, age, gender, about }}
              showButtons={false}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default EditProfile;
