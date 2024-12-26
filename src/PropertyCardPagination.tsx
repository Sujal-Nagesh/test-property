// import React, { useState } from "react";
// import { GoChevronRight, GoChevronLeft } from "react-icons/go";
// import { ImFirst, ImLast  } from "react-icons/im";



// const PropertyCardPagination: React.FC = () => {
//   const properties = [
//         { id: 1, name: "Modern Villa", location: "Beverly Hills, CA", beds: 4, baths: 3, sqft: "2,400", price: "$2,500,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 2, name: "Luxury Mansion", location: "Malibu, CA", beds: 5, baths: 4, sqft: "3,500", price: "$3,800,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 3, name: "Beach House", location: "Miami, FL", beds: 3, baths: 2, sqft: "1,800", price: "$1,200,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 4, name: "Penthouse Apartment", location: "New York, NY", beds: 2, baths: 3, sqft: "2,000", price: "$4,500,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 5, name: "Country Cottage", location: "Napa Valley, CA", beds: 3, baths: 2, sqft: "1,500", price: "$850,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 6, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 7, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 8, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 9, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 10, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 11, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 12, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 13, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 14, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 15, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 16, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//         { id: 17, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
//       ];

//   const [page, setPage] = useState(1);
//   const limit = 3;
//   const totalItems = properties.length;
//   const totalPages = Math.ceil(totalItems / limit);

//   const handlePageChange = (newPage: number) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setPage(newPage);
//     }
//   };

//   const startIndex = (page - 1) * limit;
//   const endIndex = Math.min(startIndex + limit, totalItems);
//   const currentPageProperties = properties.slice(startIndex, endIndex);

//   const visiblePages = 5;
//   const startPage = Math.max(1, page - Math.floor(visiblePages / 2));
//   const endPage = Math.min(totalPages, startPage + visiblePages - 1);

//   return (
//     <div className="p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {currentPageProperties.map((property) => (
//           <div key={property.id} className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="aspect-w-16 aspect-h-9">
//               <img src={property.imageUrl} alt={property.name} className="object-cover" />
//             </div>
//             <div className="p-6">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900">{property.name}</h3>
//                   <p className="text-sm text-gray-500">{property.location}</p>
//                 </div>
//               </div>
//               <div className="mt-4 flex items-center justify-between">
//                 <span className="text-xl font-bold text-gray-900">{property.price}</span>
//                 <button className="bg-custom text-white rounded px-4 py-2 text-sm font-medium hover:bg-custom/90">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between items-center mt-6">
//         {/* Showing Properties Info */}
//         <span className="text-sm text-gray-500">
//           Showing {startIndex + 1} to {endIndex} of {totalItems} properties
//         </span>

//         {/* Pagination Controls */}
//         <div className="flex">
//           <button
//             onClick={() => handlePageChange(1)}
//             disabled={page === 1}
//             className="px-3 py-1 text-sm font-medium border-solid border-2"
//           >
//             <ImFirst />

//           </button>

//           <button
//             onClick={() => handlePageChange(page - 1)}
//             disabled={page === 1}
//             className="px-3 py-1 text-sm font-medium border-solid border-2"
//           >
//             <GoChevronLeft />

//           </button>

//           {Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx).map((pageNum) => (
//             <button
//               key={pageNum}
//               onClick={() => handlePageChange(pageNum)}
//               className={`px-3 py-1 text-sm font-medium border-solid border-2 ${
//                 page === pageNum ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               {pageNum}
//             </button>
//           ))}

//           <button
//             onClick={() => handlePageChange(page + 1)}
//             disabled={page === totalPages}
//             className="px-3 py-1 text-sm font-medium border-solid border-2"
//           >
//             <GoChevronRight />

//           </button>

//           <button
//             onClick={() => handlePageChange(totalPages)}
//             disabled={page === totalPages}
//             className="px-3 py-1 text-sm font-medium border-solid border-2"
//           >
//             <ImLast />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCardPagination;




import React, { useState } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { ImFirst, ImLast } from "react-icons/im";

const PropertyCardPagination: React.FC = () => {
  const properties = [
    { id: 1, name: "Modern Villa", location: "Beverly Hills, CA", beds: 4, baths: 3, sqft: "2,400", price: "$2,500,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
    { id: 2, name: "Luxury Mansion", location: "Malibu, CA", beds: 5, baths: 4, sqft: "3,500", price: "$3,800,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
    { id: 3, name: "Beach House", location: "Miami, FL", beds: 3, baths: 2, sqft: "1,800", price: "$1,200,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
    { id: 4, name: "Penthouse Apartment", location: "New York, NY", beds: 2, baths: 3, sqft: "2,000", price: "$4,500,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
    { id: 5, name: "Country Cottage", location: "Napa Valley, CA", beds: 3, baths: 2, sqft: "1,500", price: "$850,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
    { id: 6, name: "Urban Loft", location: "Chicago, IL", beds: 1, baths: 1, sqft: "1,000", price: "$650,000", imageUrl: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg" },
  ];

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 3;

  // Filter properties based on search query
  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredProperties.length;
  const totalPages = Math.ceil(totalItems / limit);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, totalItems);
  const currentPageProperties = filteredProperties.slice(startIndex, endIndex);

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black"
        />
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPageProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img src={property.imageUrl} alt={property.name} className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{property.name}</h3>
              <p className="text-sm text-gray-500">{property.location}</p>
              <p className="text-sm text-gray-500">sqft:{property.sqft}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">{property.price}</span>
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-500">
          Showing {startIndex + 1} to {endIndex} of {totalItems} properties
        </span>
        <div className="flex space-x-1">
          <button onClick={() => handlePageChange(1)} disabled={page === 1} className="px-3 py-1 text-sm font-medium border-solid border-2">
            <ImFirst />
          </button>
          <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="px-3 py-1 text-sm font-medium border-solid border-2">
            <GoChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-3 py-1 text-sm font-medium border-solid border-2 ${
                page === pageNum ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {pageNum}
            </button>
          ))}
          <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} className="px-3 py-1 text-sm font-medium border-solid border-2">
            <GoChevronRight />
          </button>
          <button onClick={() => handlePageChange(totalPages)} disabled={page === totalPages} className="px-3 py-1 text-sm font-medium border-solid border-2">
            <ImLast />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardPagination;
