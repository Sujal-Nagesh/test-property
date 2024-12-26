import React from "react";

function ClientCard() {
  return (
    <>
      <body className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    alt="Client Photo"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-3xl font-semibold">John Smith</h1>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">
                      Property Requirements
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-custom mt-1 mr-3"></i>
                        <span>Modern luxury villa with ocean view</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-custom mt-1 mr-3"></i>
                        <span>Minimum 4 bedrooms and 3 bathrooms</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-custom mt-1 mr-3"></i>
                        <span>Private pool and garden</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-custom mt-1 mr-3"></i>
                        <span>Smart home features</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-custom mt-1 mr-3"></i>
                        <span>Gated community</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">
                      Preferred Locations
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded shadow-sm text-center">
                        Beverly Hills
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm text-center">
                        Malibu
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm text-center">
                        Pacific Palisades
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">Budget Range</h4>
                    <div className="bg-white p-4 rounded shadow-sm text-center text-xl font-semibold text-custom">
                      $2,500,000 - $3,500,000
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">
                      Contact Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded shadow-sm">
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium">john.smith@email.com</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-medium">+1 (555) 123-4567</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <p className="text-sm text-gray-600">Address</p>
                        <p className="font-medium">456 Park Avenue</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium">New York, NY 10022</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">
                      Additional Notes
                    </h4>
                    <p className="text-gray-700 bg-white p-4 rounded shadow-sm">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, reprehenderit ratione est fuga ullam quae beatae minus officiis quaerat mollitia aut officia hic obcaecati, odio in enim temporibus pariatur nihil itaque velit quos placeat corporis expedita! Illum sit praesentium deserunt alias ipsum rem incidunt quo sapiente optio tenetur quod eum, at odit dolor suscipit sed atque, repellendus officiis tempora beatae iste. Molestias illo ex quidem ipsam nobis voluptate provident maiores quia deleniti unde eligendi, laboriosam quod, dicta iste accusantium eius autem fugiat soluta dolorum molestiae veritatis blanditiis, numquam magni vel? Eius a illo culpa est rerum odio quaerat quidem non!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default ClientCard;
