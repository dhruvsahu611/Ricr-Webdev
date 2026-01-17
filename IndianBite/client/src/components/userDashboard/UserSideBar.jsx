import React from "react";
import { MdStreetview } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
//<TfiMenuAlt />

const UserSideBar = ({active, setActive}) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold">User Dashboard</div>
        <hr />
        <div className="grid gap-3 p-6 ">
          <button className={`${active==='overview'? "bg-emerald-900 text-amber-50" : "hover:bg-gray-100 hover:text-amber-900"} flex items-center gap-1  p-3 rounded-2xl`} onClick={()=>{setActive('overview')}}>
            <MdStreetview />
            Overview
          </button>
          <button className={`${active==='profile'? "bg-emerald-900 text-amber-50" : "hover:bg-gray-100 hover:text-amber-900"} flex items-center gap-1  p-3 rounded-2xl`} onClick={()=>{setActive('profile')}}>
            <IoPerson />
            Profile
          </button>
          <button className={`${active==='orders'? "bg-emerald-900 text-amber-50" : "hover:bg-gray-100 hover:text-amber-900"} flex items-center gap-1  p-3 rounded-2xl`} onClick={()=>{setActive('orders')}}>
            <FaShoppingCart />
            Orders
          </button>
          <button className={`${active==='transactions'? "bg-emerald-900 text-amber-50" : "hover:bg-gray-100 hover:text-amber-900"} flex items-center gap-1  p-3 rounded-2xl`} onClick={()=>{setActive('transactions')}}>
            <FaMoneyBillTransfer />
            Transactions
          </button>
          <button className={`${active==='helpDesk'? "bg-emerald-900 text-amber-50" : "hover:bg-gray-100 hover:text-amber-900"} flex items-center gap-1  p-3 rounded-2xl`} onClick={()=>{setActive('helpdesk')}}>
            <RiCustomerServiceFill />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
