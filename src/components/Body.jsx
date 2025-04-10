import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      if (userData) return;
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`min-h-screen bg-cover bg-center ${
      userData ? 
       "bg-gray-950"
      :"bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230722/pngtree-software-developer-conducting-quality-testing-on-3d-gaming-and-applications-image_3771482.jpg')]"
    }`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
