import React, { useState } from "react";

const AdvFilter: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openPopup}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        Open Advanced Filter
      </button>

      {/* Modal Popup */}
      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 overflow-y-scroll"
          onClick={closePopup} // Close when clicking outside the modal
        >
          <div
            className="bg-white rounded-lg shadow-lg z-60 p-4 sm:p-6 w-11/12 sm:w-3/4 md:w-1/2 max-w-3xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-lg font-bold mb-4">Advanced Filter</h2>

              {/* Filter Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="block w-full px-3 py-2.5 border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <input
                    type="text"
                    className="block w-full px-3 py-2.5 border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter price range"
                  />
                </div>
              </div>

              {/* Additional Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Use Case
                  </label>
                  <select className="border-2 block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Build Type
                  </label>
                  <select className="border-2 block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>New</option>
                    <option>Resale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Construction Type
                  </label>
                  <select className="border-2 block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>Concrete</option>
                    <option>Wood</option>
                    <option>Steel</option>
                    <option>Brick</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    className="border-2 block w-full px-3 py-2.5 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter number of rooms"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amenities
                  </label>
                  <input
                    type="text"
                    className="border-2 block w-full px-3 py-2.5 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter amenities"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select className="border-2 block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    
                    <option>For Sale</option>
                    <option>For Rented</option>
                  </select>
                </div>
              </div>

              {/* Sorting and Seller Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div> 
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seller ID
                  </label>
                  <input
                    type="text"
                    className="border-2 block w-full px-3 py-2.5 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter seller ID"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvFilter;
