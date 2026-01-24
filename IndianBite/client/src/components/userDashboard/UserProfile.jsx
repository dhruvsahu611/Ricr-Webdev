import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const { user } = useAuth();

  return (
    <>
      <div className="p-5">
        <div className="border-b-2 shadow rounded-2xl w-full text-2xl p-3 bg-gray-400">
          My Profile
        </div>
        <div className="border shadow rounded-2xl p-3 my-3">
          <div className="flex gap-3 items-center border-b-2 w-full text-2xl p-3 my-5">
            <FaRegUserCircle />
            <span className="w-1/6">Name:</span> <span className="text-gray-500 font-bold">{user.fullName}</span>
          </div>
          <div className="flex gap-3 items-center border-b-2 w-full text-2xl p-3 my-5">
            <MdOutlineMail />
            <span className="w-1/6">Email:</span> <span className="text-gray-500 font-bold">{user.email}</span>
          </div>
          <div className="flex gap-3 items-center border-b-2 w-full text-2xl p-3 my-5">
            <BiSolidPhoneCall />
            <span className="w-1/6">Phone:</span> <span className="text-gray-500 font-bold">{user.mobileNumber}</span>
          </div>
          <button
            className="border px-5 py-2 bg-amber-500 text-amber-100 hover:cursor-pointer rounded-xl"
            onClick={() => setIsEditProfileModalOpen(true)}
          >
            Edit Profile
          </button>
        </div>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
