import React from "react";
import { MdStreetview } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import api from "../../config/Api";
import toast from "react-hot-toast";

const UserSideBar = ({
  active,
  setActive,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { setUser, setIsLogin } = useAuth();
  const menuItems = [
    { key: "overview", title: "Overview", icon: <MdStreetview /> },
    { key: "profile", title: "Profile", icon: <IoPerson /> },
    { key: "orders", title: "Orders", icon: <FaShoppingCart /> },
    {
      key: "transactions",
      title: "Transactions",
      icon: <FaMoneyBillTransfer />,
    },
    { key: "helpDesk", title: "Help Desk", icon: <RiCustomerServiceFill /> },
  ];

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      sessionStorage.removeItem("IndianBiteUser");
      //setTimeout(() => onClose(), 5000);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
      console.log("Logout mein error hai Frontend mein.");
    }
  };

  return (
    <>
      <div className="p-3">
        <div>
          <div className="text-xl font-bold text-amber-100">
            {" "}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:cursor-pointer"
            >
              <TfiMenuAlt />
            </button>{" "}
            <span>{isSidebarOpen ? "UserDashboard" : ""}</span>
          </div>
          <hr className="text-emerald-200"/>
          <div className="py-6 space-y-5 w-full text-amber-100">
            {menuItems.map((item, idx) => (
              <button
                onClick={() => setActive(item.key)}
                key={idx}
                className={`w-full flex gap-3 items-center p-3 rounded-xl cursor-pointer ${active === item.key ? "bg-emerald-700 text-amber-100 hover:text-amber-100" : "hover:bg-emerald-100 hover:text-emerald-700"}`}
              >
                {" "}
                {item.icon}
                {isSidebarOpen && item.title}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button
            className="flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300 hover:bg-red-500 hover:text-white text-red-600"
            onClick={handleLogout}
          >
            {" "}
            <MdLogout />
            {isSidebarOpen && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
