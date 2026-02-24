import React from "react";
import hotel1 from "../assets/IndianBiteLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";


const Header = () => {
  const { user, isLogin, role } = useAuth();

  const navigate = useNavigate();

  const handleNavigate = () => {
    switch (role) {
      case "manager": {
        navigate("/resturant-dashboard");
        break;
      }
      case "partner": {
        navigate("/rider-dashboard");
        break;
      }
      case "customer": {
        navigate("/user-dashboard");
        break;
      }
      case "admin": {
        navigate("/admin-dashboard");
        break;
      }
      default:
        break;
    }
  };
  

  return (
    <div className="text-xl text-shadow-emerald-950 bg-emerald-800 shadow-sm sticky top-0 z-50 px-4 py-5 flex justify-between items-center lg:grid-cols-3 sm:grid-cols-1">
      <Link to={"/"} className="flex gap-4 items-center bg-emerald-300 p-1 rounded-full group">
        <img src={hotel1} alt="" className="h-15 w-15 object-cover rounded-full group-hover:animate-bounce hover:[animation-delay:1s]" />
        <h1 className="text-4xl shadow-emerald-950 rounded-full px-3 border-2 font-bold text-emerald-800 hover:animate-pulse duration-100">
          IndianBite
        </h1>
      </Link>
      <div className="flex gap-5 font-bold">
        <Link
          to={"/"}
          className="decoration-0 text-emerald-100 hover:text-emerald-950 hover:bg-emerald-300 hover:px-2 hover:rounded-2xl"
        >
          Home
        </Link>

        <Link
          to={"/about"}
          className="decoration-0 text-emerald-100 hover:text-emerald-950 hover:bg-emerald-300 hover:px-2 hover:rounded-2xl"
        >
          About
        </Link>

        <Link
          to={"/contact"}
          className="decoration-0 text-emerald-100 hover:text-emerald-950 hover:bg-emerald-300 hover:px-2 hover:rounded-2xl"
        >
          Contact
        </Link>
      </div>

      <div className="flex gap-3">
        {isLogin ? (
          <div className="text-emerald-950 border rounded-xl bg-blue-100 p-3 hover:cursor-pointer flex items-center gap-3 font-extrabold text-2xl" onClick={handleNavigate}>
            <img src={user.photo.url} alt="" className="w-10 h-10 rounded-full"/>
            {/* <CgProfile />  */}
            {user.fullName}
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate("/register")}
              className="text-emerald-950 bg-emerald-50 p-2 rounded-2xl hover:cursor-pointer"
            >
              Register
            </button>
            <button
              onClick={() => navigate("/login")}
              className="text-emerald-950 bg-emerald-50 p-2 rounded-2xl hover:cursor-pointer"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
