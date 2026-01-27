import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";
import { FaCamera } from "react-icons/fa";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const { user, setUser } = useAuth();
  const [preview, setPreview] = useState("");
  const [photo, setPhoto] = useState("");

  const changePhoto = async (photo) => {
    const form_Data = new FormData();
    form_Data.append("image", photo);
    form_Data.append("imageURL", preview);
    try {
      const res = await api.patch("/user/changePhoto", form_Data);
      toast.success(res.data.message);
      setUser(res.data.data);
      sessionStorage.setItem("IndianBiteUser", JSON.stringify(res.data.data));
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const newPhotoURL = URL.createObjectURL(file);

    setPreview(newPhotoURL);
    changePhoto(file);
  };

  return (
    <>
      <div className="p-5">
        <div className="border-b-2 shadow rounded-2xl w-full text-2xl p-3 bg-gray-400">
          My Profile
        </div>
        <div className="border shadow rounded-2xl p-3 my-3">
          <div>
            <div className="flex gap-5 items-center">
              <div className="relative">
                <div className=" border rounded-full w-36 h-36 overflow-hidden">
                  <img
                    src={preview || user.photo.url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 left-[75%] border bg-white p-2 rounded-full group flex gap-3">
                  <label
                    htmlFor="imageUpload"
                    className="text-(--color-primary) group-hover:text-(--color-secondary)"
                  >
                    <FaCamera />
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    className="hidden"
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                </div>
              </div>
              <div>
                <div className="text-3xl text-(--color-primary) font-bold">
                  {user.fullName}
                </div>
                <div className="text-gray-600 text-lg font-semibold">
                  {user.email}
                </div>
                <div className="text-gray-600 text-lg font-semibold">
                  {user.mobileNumber}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-3 items-center border-b-2 w-full text-2xl p-3 my-5">
              <FaRegUserCircle />
              <span className="w-1/6">Name:</span>{" "}
              <span className="text-gray-500 font-bold">{user.fullName}</span>
            </div>
            <div className="flex gap-3 items-center border-b-2 w-full text-2xl p-3 my-5">
              <MdOutlineMail />
              <span className="w-1/6">Email:</span>{" "}
              <span className="text-gray-500 font-bold">{user.email}</span>
            </div>
            <div className="flex gap-3 items-center border-b-2 w-full text-2xl p-3 my-5">
              <BiSolidPhoneCall />
              <span className="w-1/6">Phone:</span>{" "}
              <span className="text-gray-500 font-bold">
                {user.mobileNumber}
              </span>
            </div>
            <button
              className="border px-5 py-2 bg-amber-500 text-amber-100 hover:cursor-pointer rounded-xl"
              onClick={() => setIsEditProfileModalOpen(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
