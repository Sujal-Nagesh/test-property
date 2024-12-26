import React from "react";
import HeroCarousel from "./HeroCarousel";

function PropertyCard() {
  return (
    <>
      <body className="bg-gray-50">
        <HeroCarousel />  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 clear-both">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Modern Luxury Villa
                  </h1>
                  <p className="mt-2 text-lg text-gray-600">
                    123 Luxury Lane, Beverly Hills, CA 90210
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-custom">$4,500,000</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Listed 2 days ago
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center">
                  <i className="fas fa-bed text-2xl text-custom"></i>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="text-lg font-semibold">4</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-bath text-2xl text-custom"></i>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Bathrooms</p>
                    <p className="text-lg font-semibold">3.5</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-ruler-combined text-2xl text-custom"></i>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Square Feet</p>
                    <p className="text-lg font-semibold">4,200</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-car text-2xl text-custom"></i>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Garage</p>
                    <p className="text-lg font-semibold">2 Cars</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  Description
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  This stunning modern villa offers the perfect blend of luxury
                  and comfort. The open-concept design features soaring ceilings
                  and walls of glass that flood the space with natural light.
                  The gourmet kitchen boasts top-of-the-line appliances, custom
                  cabinetry, and a large center island perfect for entertaining.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  The primary suite is a true retreat with a spa-like bathroom
                  and custom walk-in closet. Three additional bedrooms provide
                  ample space for family or guests. The outdoor living space
                  includes a covered patio, pool, and meticulously landscaped
                  grounds.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  Features &amp; Amenities
                </h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <i className="fas fa-check text-custom"></i>
                    <span className="ml-3 text-gray-600">
                      Smart Home Technology
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-custom"></i>
                    <span className="ml-3 text-gray-600">Wine Cellar</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-custom"></i>
                    <span className="ml-3 text-gray-600">Home Theater</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-custom"></i>
                    <span className="ml-3 text-gray-600">Infinity Pool</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-custom"></i>
                    <span className="ml-3 text-gray-600">Outdoor Kitchen</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-custom"></i>
                    <span className="ml-3 text-gray-600">Security System</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  Location
                </h2>
                <div className="mt-4 h-[400px] bg-cover bg-center rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Similar Properties
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A modern luxury house exterior with contemporary architecture, featuring clean lines, large windows, and professional landscaping. The property showcases a minimalist design with high-end finishes and a welcoming entrance.&width=400&height=300&orientation=landscape&flag=a2ad04fd-327b-4c15-9679-61419ff5edc3&flag=9aecf959-873c-4504-ae9c-8154ee7b1e3d&flag=7a26aebf-eb11-4918-8215-3476585da325"
                  className="w-full h-48 object-cover"
                  alt="Similar Property"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Contemporary Estate
                  </h3>
                  <p className="mt-2 text-gray-600">456 Elite Avenue</p>
                  <p className="mt-2 text-xl font-bold text-custom">
                    $3,900,000
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A luxurious Mediterranean-style villa with terracotta roof, featuring elegant archways, a grand entrance, and lush landscaping. The property exudes sophistication with its classNameic design and premium materials.&width=400&height=300&orientation=landscape&flag=cdfc48ac-72dd-4870-8c75-12ddceea1587&flag=e4493062-24c1-4b3b-931a-3994d2c0259c&flag=2e3fc202-33ab-4fa0-9e4d-2b437861ae7d"
                  className="w-full h-48 object-cover"
                  alt="Similar Property"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Mediterranean Villa
                  </h3>
                  <p className="mt-2 text-gray-600">789 Grand Boulevard</p>
                  <p className="mt-2 text-xl font-bold text-custom">
                    $4,200,000
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A coastal modern mansion with sleek architecture, featuring glass walls, ocean views, and an infinity pool. The property showcases contemporary design with premium finishes and seamless indoor-outdoor living.&width=400&height=300&orientation=landscape&flag=67cf7833-5a02-453f-a455-4a0652e826f9&flag=49267afb-1174-4643-be10-4eb13b0b6165&flag=8a803571-60ab-4377-84aa-5f299887d71c"
                  className="w-full h-48 object-cover"
                  alt="Similar Property"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Coastal Modern
                  </h3>
                  <p className="mt-2 text-gray-600">321 Ocean Drive</p>
                  <p className="mt-2 text-xl font-bold text-custom">
                    $4,800,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default PropertyCard;
