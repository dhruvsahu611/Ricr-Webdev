import React from "react";
import { MdStreetview } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";

const UserSideBar = ({
  active,
  setActive,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
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

  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold">
          {" "}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2"
          >
            <TfiMenuAlt />
          </button>{" "}
          <span>{isSidebarOpen ? "UserDashboard" : ""}</span>
        </div>
        <hr />
        <div className="py-6 space-y-5 w-full">
          {menuItems.map((item, idx) => (
            <button
              onClick={() => setActive(item.key)}
              key={idx}
              className={`w-full flex gap-3 items-center p-3 rounded-xl ${active === item.key ? "bg-amber-500 text-amber-100" : "hover:bg-gray-400"}`}
            >
              {" "}
              {item.icon}
              {isSidebarOpen && item.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
