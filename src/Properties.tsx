import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For React Router v6+
import PropertyCardPagination from "./PropertyCardPagination";

function Properties() {
  const navigate = useNavigate();

  const navigateToFile1 = () => {
    navigate("/properties/properties_1"); // Replace '/file1' with the actual route/path
  };

  return (
    <>
      <body className="bg-gray-50 min-h-screen">
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {" "}
            <div className="w-80 flex-shrink-0  ">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Filters
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Property Type
                    </label>
                    <select className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md">
                      {" "}
                      <option>All Types</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Condo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Price Range
                    </label>
                    <div className="mt-1 grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Min"
                        className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md"
                      />{" "}
                      <input
                        type="text"
                        placeholder="Max"
                        className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md"
                      />{" "}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Location
                    </label>{" "}
                    <select className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md">
                      {" "}
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option> <option>4+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <select className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md">
                      {" "}
                      <option>Active</option>
                      <option>Under Construction</option>
                      <option>Rented</option>
                      <option>Sold</option>{" "}
                    </select>
                  </div>

                  {/* Slider for square feet */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Sqft Range
                    </label>
                    <div className="mt-1 grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Min"
                        className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md"
                      />{" "}
                      <input
                        type="text"
                        placeholder="Max"
                        className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md"
                      />{" "}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full bg-black text-white !rounded-md px-4 py-2 text-sm font-medium hover:bg-custom/90">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                {" "}
                <h2 className="text-2xl font-bold text-gray-900">
                  Featured Properties
                </h2>
                <div className="flex items-center space-x-4">
                  <select className="pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-custom focus:border-custom rounded-md">
                    {" "}
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>{" "}
                    <option>Newest First</option>
                  </select>
                </div>
              </div>

              {/* All properties lie over here */}

              <PropertyCardPagination />

              {/* all properties end here with pagination */}
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default Properties;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // For React Router v6+
// import PropertyCardPagination from "./PropertyCardPagination";

// function Properties() {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState(""); // State to handle search query

//   const navigateToFile1 = () => {
//     navigate("/properties/properties_1"); // Replace '/file1' with the actual route/path
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <>
//       <body className="bg-gray-50 min-h-screen">
//         <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex gap-8">
//             <div className="w-80 flex-shrink-0">
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h3 className="text-lg font-medium text-gray-900 mb-4">
//                   Filters
//                 </h3>

//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Property Type
//                     </label>
//                     <select className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md">
//                       <option>All Types</option>
//                       <option>House</option>
//                       <option>Apartment</option>
//                       <option>Condo</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Price Range
//                     </label>
//                     <div className="mt-1 grid grid-cols-2 gap-2">
//                       <input
//                         type="text"
//                         placeholder="Min"
//                         className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Max"
//                         className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Location
//                     </label>
//                     <select className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md">
//                       <option>Any</option>
//                       <option>1+</option>
//                       <option>2+</option>
//                       <option>3+</option>
//                       <option>4+</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Status
//                     </label>
//                     <select className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md">
//                       <option>Active</option>
//                       <option>Under Construction</option>
//                       <option>Rented</option>
//                       <option>Sold</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Sqft Range
//                     </label>
//                     <div className="mt-1 grid grid-cols-2 gap-2">
//                       <input
//                         type="text"
//                         placeholder="Min"
//                         className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Max"
//                         className="mt-1 w-full pl-3 pr-10 py-2 text-base border-solid border-2 focus:outline-none focus:border-black rounded-md"
//                       />
//                     </div>
//                   </div>

//                   <div className="pt-4">
//                     <button className="w-full bg-black text-white !rounded-md px-4 py-2 text-sm font-medium hover:bg-custom/90">
//                       Apply Filters
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="mb-6 flex items-center justify-between">
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   Featured Properties
//                 </h2>
//                 <div className="flex items-center space-x-4">
                  
//                   <select className="pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-custom focus:border-custom rounded-md">
//                     <option>Sort by: Featured</option>
//                     <option>Price: Low to High</option>
//                     <option>Price: High to Low</option>
//                     <option>Newest First</option>
//                   </select>
//                 </div>
//               </div>

//               {/* All properties with pagination */}
//               <PropertyCardPagination searchQuery={searchQuery} />
//               {/* All properties end here */}
//             </div>
//           </div>
//         </main>
//       </body>
//     </>
//   );
// }

// export default Properties;
