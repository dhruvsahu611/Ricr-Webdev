import React from "react";
import northIndia from "../assets/northindi.jpg";
import southIndia from "../assets/southIndi.jpg";
import street from "../assets/streetFood.jpg";
import desert from "../assets/desertImg.png";
import { useNavigate } from "react-router-dom";
import brand from "../assets/IndianBiteLogo.png";


const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-5xl mx-auto text-center mt-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to <span className="text-emerald-800">IndianBite</span>
          </h1>

          <div className="flex items-center justify-center">
            <img src={brand} alt="" className="h-40 w-40 rounded-full animate-pulse [animation-delay:1s]"/>
          </div>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Delicious food from your favorite restaurants delivered to your
            door. Simple, fast and reliable — start by tapping Order Now.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              id="orderNowButton"
              onClick={()=>navigate("/order-now")}
              className="px-8 py-3 rounded-full bg-green-600 text-white text-lg font-semibold hover:scale-105 transition-transform duration-200 hover:cursor-pointer"
            >
              Order Now
            </button>

            <div className="text-sm text-gray-600">
              <div>Estimated delivery</div>
              <div className="font-semibold">30-40 min • Cash & UPI</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-14">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Browse by category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="h-24 bg-gray-200 rounded-md mb-4 overflow-hidden object-cover"><img src={northIndia} alt="" /></div>
            <div className="font-medium text-gray-900">North Indian</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="h-24 bg-gray-200 rounded-md mb-4 overflow-hidden object-cover"><img src={southIndia} alt="" /></div>
            <div className="font-medium text-gray-900">South Indian</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="h-24 bg-gray-200 rounded-md mb-4 overflow-hidden object-cover"><img src={street} alt="" /></div>
            <div className="font-medium text-gray-900">Street Food</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="h-24 bg-gray-200 rounded-md mb-4 overflow-hidden object-cover"><img src={desert} alt="" /></div>
            <div className="font-medium text-gray-900">Desserts</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Popular dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <div className="text-lg font-semibold text-gray-900">Paneer Butter Masala</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <div className="text-lg font-semibold text-gray-900">Masala Dosa</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <div className="text-lg font-semibold text-gray-900">Veg Biryani</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <div className="text-lg font-semibold text-gray-900">Pav Bhaji</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <div className="text-lg font-semibold text-gray-900">Chole Bhature</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <div className="text-lg font-semibold text-gray-900">Gulab Jamun</div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why IndianBite?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-12 bg-gray-100 rounded mb-4"></div>
            <div className="font-semibold">Local kitchens</div>
            <p className="text-sm text-gray-600 mt-2">We partner with trusted neighborhood cooks.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-12 bg-gray-100 rounded mb-4"></div>
            <div className="font-semibold">Fast delivery</div>
            <p className="text-sm text-gray-600 mt-2">Optimized routes for timely delivery.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-12 bg-gray-100 rounded mb-4"></div>
            <div className="font-semibold">Easy payments</div>
            <p className="text-sm text-gray-600 mt-2">Cash and UPI supported at checkout.</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">What customers say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="h-10 bg-gray-200 rounded w-20 mb-3"></div>
            <p className="text-sm text-gray-700">"Great food and quick delivery — highly recommend."</p>
            <div className="text-xs text-gray-500 mt-3">— Customer A</div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="h-10 bg-gray-200 rounded w-20 mb-3"></div>
            <p className="text-sm text-gray-700">"Love the variety and taste. Very reliable."</p>
            <div className="text-xs text-gray-500 mt-3">— Customer B</div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="h-10 bg-gray-200 rounded w-20 mb-3"></div>
            <p className="text-sm text-gray-700">"Easy to order, exactly what I wanted."</p>
            <div className="text-xs text-gray-500 mt-3">— Customer C</div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="font-medium">How do I place an order?</div>
            <div className="text-sm text-gray-600 mt-2">Tap Order Now and follow the simple flow to add restaurants and dishes.</div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="font-medium">What payment methods are accepted?</div>
            <div className="text-sm text-gray-600 mt-2">Cash on delivery and UPI are supported.</div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Home;
