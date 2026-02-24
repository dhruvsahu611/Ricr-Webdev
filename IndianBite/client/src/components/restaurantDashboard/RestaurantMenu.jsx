import React from "react";
import { useState } from "react";
import AddMenuItemModal from "./modals/AddMenuItemModal";
import { FaEye, FaEdit } from "react-icons/fa";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { ImBlocked } from "react-icons/im";

const RestaurantMenu = () => {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isViewItemModalOpen, setIsViewItemModalOpen] = useState(false);
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [menuItems, setMenuItems] = useState();
  return (
    <>
      <div className="bg-gray-50 rounded-lg p-6 h-full overflow-y-auto">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Menu Management
          </h2>
          <button
            className="px-4 py-2 bg-emerald-900 text-white rounded-lg hover:bg-gray-400 hover:cursor-pointer transition font-semibold"
            onClick={() => setIsAddItemModalOpen(true)}
          >
            Add Item
          </button>
        </div>

        <div className="border mt-3"></div>
        <div className="bg-white rounded-lg shadow-md p-6 ">
          <table className="w-full border">
            <thead>
              <tr className="bg-amber-600 text-amber-100 font-semibold">
                <th>S.No</th>
                <th colSpan={2}>Item Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>Cuisine</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((items, idx) => (
                <tr
                  key={idx}
                  className="grid grid-cols-8 text-center py-2 border-b border-gray-800"
                >
                  <td>{idx + 1}</td>
                  <td className="col-span-2">{items.itemName}</td>
                  <td>{items.price}</td>
                  <td>{items.type.toUpperCase()}</td>
                  <td>{items.cuisine}</td>
                  <td className="flex justify-center items-center text-2xl">
                    {items.availability === "available" ? (
                      <FaToggleOn
                        className="text-green-500"
                        title="Available"
                      />
                    ) : items.availability === "unavailable" ? (
                      <FaToggleOff
                        className="text-red-500"
                        title="Unavailable"
                      />
                    ) : (
                      <ImBlocked
                        className="font-bold text-black"
                        title="Removed form Menu"
                      />
                    )}
                  </td>
                  <td className="flex justify-center gap-4">
                    <button
                      className="text-gray-500 p-2 rounded-lg bg-gray-200 shadow"
                      onClick={() => {
                        setSelectedItem(items);
                        setIsViewItemModalOpen(true);
                      }}
                    >
                      <FaEye />
                    </button>
                    <button
                      className="text-blue-500  p-2 rounded-lg bg-gray-200 shadow"
                      onClick={() => {
                        setSelectedItem(items);
                        setIsEditItemModalOpen(true);
                      }}
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isAddItemModalOpen && (
        <AddMenuItemModal onClose={() => setIsAddItemModalOpen(false)} />
      )}
    </>
  );
};

export default RestaurantMenu;
