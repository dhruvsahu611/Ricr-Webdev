import React from "react";

const EditProfileModal = ({ onClose }) => {
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
