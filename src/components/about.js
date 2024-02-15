import React from "react";
import img from "../assets/img.jpg"; // Replace with your actual image path
import CTASection from "./CTA";
import profile from "../assets/profile.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 sm:gap-8 max-w-2xl">
        {/* Profile 1 */}
        <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-md ">
          <img
            src={profile}
            alt="Mr. Darsheel"
            className="rounded-full w-40 h-40 border-royal-500 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-royal-500 text-center mb-2">
            Founder/CEO
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
            Mr. Darsheel
          </h3>
        </div>

        {/* Profile 2 - You can duplicate this structure for additional profiles */}
        <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-md ">
          <img
            src={profile}
            alt="Mr. Darsheel"
            className="rounded-full w-40 h-40 border-royal-500 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-royal-500 text-center mb-2">
            Founder/CEO
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
            Mr. Darsheel
          </h3>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default About;
