import React, { useState } from "react";
import api from "../../../config/Api"
import { useAuth } from "../../../context/AuthContext";
const EditProfileModal = ({ onClose }) => {

  const {user, setUser} = useAuth();
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    mobileNumber: user.mobileNumber,
  });
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await api.put("/user/update", formData);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/70 flex justify-center p-7 items-center w-full">
        <div className="bg-amber-50 w-1/2 max-h-[85vh] overflow-y-auto rounded-2xl p-3">
        
          <div>EditProfileModal</div>

          <button
            onClick={() => onClose()}
            className="px-5 m-3 rounded-2xl bg-green-800 text-amber-50 py-2 hover:cursor-pointer text-3xl pt-0"
          >
            Save
          </button>
          
        </div>
        
      </div>
    </>
  );
};

export default EditProfileModal;
