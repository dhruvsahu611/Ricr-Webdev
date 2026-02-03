import React, { useState } from "react";
import api from "../../../config/Api";
import toast from "react-hot-toast"


const ResetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    oldPassword:"",
    newPassword:"",
    confirmPassword:"",
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("Submitted password");

    //validation karo ab
    if(!formData.oldPassword || !formData.newPassword || !formData.confirmPassword){
      toast.error("All Fields Are Required");
      return;
    }
    if(formData.newPassword !== formData.confirmPassword){
      toast.error("Please Enter correct confirm password");
      return;
    }
    
    //main kaam
    try {
      const res = await api.patch("/user/resetPassword", formData);
      toast.success(res.data.message);
      setTimeout(() => onClose(), 1500);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Reset Password Submit Error")
    } finally{
      setLoading(false);
    }
  };

  const handleInputChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
   
  }
  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
        <div className="bg-white w-1/3 max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
          <div className="flex justify-between px-6 py-4 border-b border-gray-300 items-center sticky top-0 bg-white">
            <h2 className="text-xl font-semibold text-gray-800">
              Edit Password
            </h2>
            <button
              onClick={() => onClose()}
              className="text-gray-600 hover:text-red-600 text-2xl transition"
            >
              ⊗
            </button>
          </div>

          <form action="" onSubmit={handleSubmit} onChange={handleInputChange}>
            <div className="p-3">
              <div className="flex justify-between gap-3 p-3 m-3 items-center">
                <label htmlFor="oldPassword">Old Password*</label>
                <input
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  placeholder="Enter Your Old Password"
                  value={formData.oldPassword}
                  className="w-1/2 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between gap-3 p-3 m-3 items-center">
                <label htmlFor="newPassword">New Password*</label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={formData.newPassword}
                  placeholder="Enter Your New Password"
                  className="w-1/2 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between gap-3 p-3 m-3 items-center">
                <label htmlFor="confirmPassword">Confirm Password*</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Enter Your Confirm Password"
                  className="w-1/2 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-300">
                <button
                  type="button"
                  onClick={() => onClose()}
                  disabled={loading}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin">⟳</span> Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordModal;
