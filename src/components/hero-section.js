import React from "react";
import image from "../assets/image.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white pb-10">
      <div className="container mx-auto px-4 pt-20 pb-16 max-w-2xl flex flex-col items-center gap-8 lg:flex-row lg:gap-24">
        {/* Image section first, increased size and centered */}

        {/* Text section below, moved under the image */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold sm:text-5xl leading-tight">
            Discover a Consultant's Approach to Problem Solving
          </h1>
          <p className="text-lg mt-4 mb-8 sm:text-xl">
            Learn the proven approach used by top strategy consultants to tackle
            complex business challenges effectively. Solve an MBB case study
            LIVE with Ashwin to understand the concepts hands-on.
          </p>
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex items-center justify-center mt-5 lg:mt-0">
        <img
          src={image}
          alt="Consultancy"
          class="rounded-xl shadow-lg object-cover max-w-full max-h-[80vh] lg:max-h-[90vh] md:mx-auto sm:mx-10" // Updated classes
        />
      </div>
    </div>
  );
};

export default Hero;
