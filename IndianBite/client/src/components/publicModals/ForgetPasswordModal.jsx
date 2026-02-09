import React from "react";
import { useState } from "react";
import api from "../../config/Api";
import toast from "react-hot-toast";

const ForgetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New Password and Confirm Password Must be Same");
      setLoading(false);
      return;
    }

    try {
      let res;
      if (isOtpSent) {
        if (isOtpVerified) {
          res = await api.post("/auth/forgetPassword", formData);
          toast.success(res.data.message);
          onClose();
        } else {
          res = await api.post("/auth/verifyOtp", formData);
          toast.success(res.data.message);
          setIsOtpSent(true);
          setIsOtpVerified(true);
        }
      } else {
        res = await api.post("/auth/genOtp", formData);
        toast.success(res.data.message);
        setIsOtpSent(true);
        console.log("sending otp");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
      <div className="bg-white w-1/3 max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
        <div className="flex justify-between px-6 py-4 border-b border-gray-300 items-center sticky top-0 bg-white">
          <h2 className="text-xl font-semibold text-gray-800">
            Change Password
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
            <div className="">
              <div className="flex justify-between gap-3 p-3 m-3 items-center">
                <label htmlFor="emailPassword">Email</label>
                <input
                  type="email"
                  name="email"
                  id="emailPassword"
                  value={formData.email}
                  placeholder="Enter Your Registered Email"
                  disabled={isOtpSent}
                  onChange={handleInputChange}
                  className="w-1/2 disabled:bg-amber-700-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {isOtpSent && (
                <div className="flex justify-between gap-3 p-3 m-3 items-center">
                  <label htmlFor="otp">OTP*</label>
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    value={formData.otp}
                    placeholder="Enter OTP sent to your email"
                    disabled={isOtpVerified}
                    onChange={handleInputChange}
                    className="w-1/2 disabled:bg-amber-700-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              {isOtpSent && isOtpVerified && (
                <div>
                  <div className="flex justify-between gap-3 p-3 m-3 items-center">
                    <label htmlFor="newPassword">New Password*</label>
                    <input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      placeholder="Enter Your Confirm Password"
                      className="w-1/2 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-300">
              <button
                type="button"
                onClick={() => onClose()}
                disabled={loading}
                className="cursor-pointer px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⟳</span> Loading...
                  </>
                ) : isOtpSent ? (
                  isOtpVerified ? (
                    "Update Password"
                  ) : (
                    "Verify OTP"
                  )
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordModal;
