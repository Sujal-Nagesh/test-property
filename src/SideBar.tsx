import React, { useState } from 'react';

const SidebarFilters = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-800/50 z-50 ${
          isSidebarOpen ? 'flex' : 'hidden'
        } flex-col items-center justify-center`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6"
            />
          </svg>
        </button>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-xs">
          helo
        </div>
      </div>

      <div className="md:w-80 flex-shrink-0">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Filters</h3>
          {/* Your filter content here */}
        </div>
      </div>

      {/* Mobile button to open the sidebar */}
      <div className="md:hidden">
        <button
          className="fixed top-4 left-4 text-black"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SidebarFilters;