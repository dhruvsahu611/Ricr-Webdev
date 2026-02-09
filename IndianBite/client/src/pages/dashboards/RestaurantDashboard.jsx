import React, { useState, useEffect } from "react";
import RestaurantOverview from "../../components/restaurantDashboard/RestaurantOverview";
import RestaurantProfile from "../../components/restaurantDashboard/RestaurantProfile";
import RestaurantOrders from "../../components/restaurantDashboard/RestaurantOrders";
import RestaurantMenu from "../../components/restaurantDashboard/RestaurantMenu";
import RestaurantHelpDesk from "../../components/restaurantDashboard/RestaurantHelpDesk";
import RestaurantSideBar from "../../components/restaurantDashboard/RestaurantSideBar";
import RestaurantEarnings from "../../components/restaurantDashboard/RestaurantEarnings";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const RestaurantDashboard = () => {
  const {role, isLogin} = useAuth();
  const navigate = useNavigate();

  const [active, setActive] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(()=>{
    if(!isLogin){
      navigate("/login");
    }
  });

  if(role !== "manager"){
    return(
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-5xl text-red-600">
              ⊗
            </div>
            <div className="text-xl">
              You are not login as Manager. Please Login again.
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
          className={`bg-blue-300 transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-2/10" : "w-16"}`}
        >
          <RestaurantSideBar active={active} setActive={setActive} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        </div>
        <div
          className={`border border-amber-700 transition-all duration-300 ${isSidebarOpen ? "w-8/10" : "w-full"}`}
        >
          {active === "overview" && <RestaurantOverview />}
          {active === "profile" && <RestaurantProfile />}
          {active === "orders" && <RestaurantOrders />}
          {active === "transactions" && <RestaurantEarnings />}
          {active === "helpdesk" && <RestaurantHelpDesk />}          {active === "menu" && <RestaurantMenu />}
        </div>

        
      </div>
    </>
  );
};

export default RestaurantDashboard;
