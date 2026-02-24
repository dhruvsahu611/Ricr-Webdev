import React, { useEffect, useState } from 'react';
import api from "../config/Api";
import toast from "react-hot-toast";

const OrderNow = () => {
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState();

  const fetchAllRestaurants = async ()=>{
    setLoading(true);
    try {
      const res = await api.get("/public/restaurant");
      setRestaurant(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchAllRestaurants
  }, []);

  const handleRestaurantClick = async ()=>{
    console.log("Restaurant Click kar rahe ho.");
  }

  return (
    <>
      <div className="grid grid-cols-4">
        {restaurant && restaurant.map((EachRestaurant, idx)=>(
          <div className="border rounder shadow-2xl bg-emerald-100" onClick={handleRestaurantClick} key={idx}>
            <img src={EachRestaurant.photo.url} alt="" />
            <div>{EachRestaurant.restaurantName}</div>
            <div>{EachRestaurant.address}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default OrderNow