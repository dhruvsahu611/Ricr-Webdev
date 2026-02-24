import React, { useState, useEffect } from "react";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransactions from "../../components/userDashboard/UserTransactions";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import UserSideBar from "../../components/userDashboard/userSideBar";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const UserDashboard = () => {
  const {role, isLogin} = useAuth();
  const navigate = useNavigate();

  const [active, setActive] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(()=>{
    if(!isLogin){
      navigate("/login");
    }
  });

  if(role !== "customer"){
    return(
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-5xl text-red-600">
              ⊗
            </div>
            <div className="text-xl">
              You are not login as Customer. Please Login again.
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div
          className={`bg-slate-800 transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-2/10" : "w-16"}`}
        >
          <UserSideBar active={active} setActive={setActive} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        </div>
        <div
          className={`border border-amber-700 transition-all duration-300 ${isSidebarOpen ? "w-8/10" : "w-full"}`}
        >
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transactions" && <UserTransactions />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>

        
      </div>
    </>
  );
};

export default UserDashboard;
