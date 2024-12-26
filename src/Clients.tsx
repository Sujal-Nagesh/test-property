import React from "react";
import { useNavigate } from "react-router-dom";

function Clients() {

  const navigate = useNavigate();

  const navigateToFile1 = () => {
    navigate('/clients/client_1'); // Replace '/file1' with the actual route/path
  };

  return (
    <>
      <body className="bg-gray-50 min-h-screen">
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {" "}
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Filters
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Property Type
                    </label>
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom rounded-md">
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
                        type="number"
                        placeholder="Min"
                        className="block w-full border-gray-300 rounded-md focus:ring-custom focus:border-custom"
                      />{" "}
                      <input
                        type="number"
                        placeholder="Max"
                        className="block w-full border-gray-300 rounded-md focus:ring-custom focus:border-custom"
                      />{" "}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Bedrooms
                    </label>{" "}
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom rounded-md">
                      {" "}
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option> <option>4+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Bathrooms
                    </label>
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom rounded-md">
                      {" "}
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>{" "}
                    </select>
                  </div>

                  <div className="pt-4">
                    <button className="w-full bg-custom text-white !rounded-button px-4 py-2 text-sm font-medium hover:bg-custom/90">
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
                  Featured Clients
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {" "}
                <div className="bg-white rounded-lg shadow overflow-hidden" onClick={navigateToFile1}>
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                      alt="Property"
                      className="object-cover"
                    />{" "}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          John Smith
                        </h3>
                        <p className="text-sm text-gray-500">
                          Beverly Hills, CA
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-custom">
                        {" "}
                        <i className="far fa-heart text-xl"></i>
                      </button>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
                      {" "}
                      <span>
                        <i className="fas fa-bed mr-2"></i>4 beds
                      </span>
                      <span>
                        <i className="fas fa-bath mr-2"></i>3 baths
                      </span>{" "}
                      <span>
                        <i className="fas fa-ruler-combined mr-2"></i>2,400 sqft
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      {" "}
                      <span className="text-xl font-bold text-gray-900">
                        $2,500,000
                      </span>
                      <button className="bg-custom text-white !rounded-button px-4 py-2 text-sm font-medium hover:bg-custom/90">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  {" "}
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src="https://www.empirepmgroup.com/images/full-service-management-3.jpg"
                      alt="Property"
                      className="object-cover"
                    />{" "}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          Luxury Penthouse
                        </h3>
                        <p className="text-sm text-gray-500">Manhattan, NY</p>
                      </div>
                      <button className="text-gray-400 hover:text-custom">
                        {" "}
                        <i className="far fa-heart text-xl"></i>
                      </button>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
                      {" "}
                      <span>
                        <i className="fas fa-bed mr-2"></i>3 beds
                      </span>
                      <span>
                        <i className="fas fa-bath mr-2"></i>2.5 baths
                      </span>{" "}
                      <span>
                        <i className="fas fa-ruler-combined mr-2"></i>1,800 sqft
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      {" "}
                      <span className="text-xl font-bold text-gray-900">
                        $3,200,000
                      </span>
                      <button className="bg-custom text-white !rounded-button px-4 py-2 text-sm font-medium hover:bg-custom/90">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  {" "}
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src="https://www.99acres.com/microsite/articles/files/2018/09/Distressed-properties.jpg"
                      alt="Property"
                      className="object-cover"
                    />{" "}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          Beachfront Estate
                        </h3>
                        <p className="text-sm text-gray-500">Malibu, CA</p>
                      </div>
                      <button className="text-gray-400 hover:text-custom">
                        {" "}
                        <i className="far fa-heart text-xl"></i>
                      </button>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
                      {" "}
                      <span>
                        <i className="fas fa-bed mr-2"></i>5 beds
                      </span>
                      <span>
                        <i className="fas fa-bath mr-2"></i>4 baths
                      </span>{" "}
                      <span>
                        <i className="fas fa-ruler-combined mr-2"></i>3,500 sqft
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      {" "}
                      <span className="text-xl font-bold text-gray-900">
                        $4,800,000
                      </span>
                      <button className="bg-custom text-white !rounded-button px-4 py-2 text-sm font-medium hover:bg-custom/90">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <nav className="flex items-center justify-between">
                  {" "}
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      {" "}
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">3</span> of{" "}
                        <span className="font-medium">24</span> results
                      </p>
                    </div>
                    <div>
                      <nav
                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        aria-label="Pagination"
                      >
                        {" "}
                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          {" "}
                          <span className="sr-only">Previous</span>
                          <i className="fas fa-chevron-left h-5 w-5"></i>
                        </button>{" "}
                        <button className="relative inline-flex items-center px-4 py-2 border border-custom bg-custom text-sm font-medium text-white">
                          1
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                          2
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                          3
                        </button>
                        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          {" "}
                          <span className="sr-only">Next</span>
                          <i className="fas fa-chevron-right h-5 w-5"></i>
                        </button>{" "}
                      </nav>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default Clients;
