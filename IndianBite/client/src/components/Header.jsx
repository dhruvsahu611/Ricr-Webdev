import React from "react";
import hotel1 from "../assets/hotel1.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";


const Header = () => {
  const { user, isLogin } = useAuth();

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
    <div className="bg-(--color-primary) px-4 py-5 flex justify-between items-center">
      <Link to={"/"} className="flex gap-4">
        <img src={hotel1} alt="" className="h-12 w-20 object-cover" />
        <h1 className="text-4xl shadow-emerald-950 rounded-2xl px-3 border-2 font-bold text-emerald-800">
          Indian Bite
        </h1>
      </Link>
      <div className="flex gap-5 font-bold">
        <Link
          to={"/"}
          className="decoration-0 text-(--color-text) hover:text-amber-100 hover:bg-emerald-800 hover:px-2 hover:rounded-2xl"
        >
          Home
        </Link>

        <Link
          to={"/about"}
          className="decoration-0 text-(--color-text) hover:text-amber-100 hover:bg-emerald-800 hover:px-2 hover:rounded-2xl"
        >
          About
        </Link>

        <Link
          to={"/contact"}
          className="decoration-0 text-(--color-text) hover:text-amber-100 hover:bg-emerald-800 hover:px-2 hover:rounded-2xl"
        >
          Contact
        </Link>
      </div>

      <div className="flex gap-3">
        {isLogin ? (
          <div className="text-amber-950 border rounded-xl bg-blue-100 p-3 hover:cursor-pointer flex items-center gap-3 font-extrabold text-2xl" onClick={handleNavigate}><CgProfile /> {user.fullName}</div>
        ) : (
          <>
            <button
              onClick={() => navigate("/register")}
              className="text-amber-100 bg-emerald-800 p-2 rounded-2xl hover:cursor-pointer"
            >
              Register
            </button>
            <button
              onClick={() => navigate("/login")}
              className="text-amber-100 bg-emerald-800 p-2 rounded-2xl hover:cursor-pointer"
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
