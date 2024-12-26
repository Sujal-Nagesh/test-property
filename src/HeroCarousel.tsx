import React, { useState, useEffect } from "react";

interface Slide {
  image: string;
}

const HeroCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      image: "https://www.empirepmgroup.com/images/full-service-management-3.jpg",
    },
    {
      image: "https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg",
    },
    {
      image: "https://www.99acres.com/microsite/articles/files/2018/09/Distressed-properties.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="flex pl-10 pr-10 pt-5 ">
      <section className="relative h-auto w-full mx-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Carousel Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-8">
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-20 hover:bg-opacity-70 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-20 hover:bg-opacity-70 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                currentSlide === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>

          {/* Side card starts from here */}
      
      <div className="w-full md:w-[40%] float-none md:float-right h-auto md:h-[550px] p-6 bg-white shadow-lg rounded-lg mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">Modern Luxury Villa</h2>
          <p className="text-gray-600 mb-6">
            Experience luxury living at its finest in this stunning modern villa
            with premium amenities and spectacular views.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <i className="fas fa-bed text-custom mr-3"></i>
              <span>4 Bedrooms</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-bath text-custom mr-3"></i>
              <span>3.5 Bathrooms</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-ruler-combined text-custom mr-3"></i>
              <span>4,200 Sq Ft</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <button className="w-full bg-custom bg-black text-white py-3 rounded-lg font-semibold">
            Schedule Viewing
          </button>
          <button className="w-full border-2 border-custom text-custom py-3 rounded-lg font-semibold">
            Download Brochure
          </button>
          <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
