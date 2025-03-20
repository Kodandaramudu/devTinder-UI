import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../utils/constant";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.post(BASE_URL + "/logout",{}, {
      withCredentials: true,
    });
    dispatch(removeUser());
    return navigate("/login");
  };
  const user = useSelector((store) => store.user);
  return (
    <div className="navbar bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500  p-4 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">👩‍💻DevTinder</Link>
      </div>
      {user && (
        <div className="flex gap-2">
          <p className="mx-4 items-center text-white">
            {"Welcome, " + user?.firstName}
          </p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Photo" src={user?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
