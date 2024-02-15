import React from "react";
// import { useNavigate } from "react-router-dom"; // Import for navigation

// function ParentComponent() {
//   const navigate = useNavigate();

//   return (
//     <CTASection navigate={navigate} />
//   );
// }
function CTASection({ navigate }) {
  return (
    <div className="container mx-auto flex flex-col items-center py-20">
      {/* Hero section with Darsheel's description */}
      <div className="text-center max-w-md mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Meet Darsheel Savla, the culinary powerhouse
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Darsheel Savla, co-founder at PatilKaki, is a charismatic and creative
          leader with an unshakable drive for food, people, and brand building.
          He's bringing the legendary PatilKaki recipes to the world and helping
          fellow founders navigate the D2C landscape.
        </p>
      </div>

      {/* CTA button with clear call to action and navigation on click */}
      <button
        className="bg-yellow-500 text-black px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none"
        // onClick={() => navigate("/CountdownTimer")}
      >
        Join Darsheel's journey
      </button>
    </div>
  );
}

export default CTASection;
