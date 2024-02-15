import React, { useState, useEffect, useRef } from "react";

const FormSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Open the form after 5 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Your form submission logic here, e.g., send data to an API
    console.log("Phone number:", phoneNumber);
    console.log("Email address:", emailAddress);

    handleClose(); // Close the form after submission
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 ">
      {isOpen && (
        <div
          ref={formRef}
          className={`form-slider fixed bottom-0 right-0 shadow-md rounded-lg mx-auto mb-10 p-5 transition-all duration-500 ease-in-out bg-slate-500 ${
            isOpen ? "block" : "hidden"
          }`}
          style={{ transform: "translateY(100%);" }} // Initial off-screen position
        >
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 p-2 text-2xl text-gray-900 hover:text-gray-600"
          >
            &times;
          </button>
          <h2 className="text-lg font-semibold p-4 text-slate-900 text-center">
            Join with us to grow your business
          </h2>
          <form onSubmit={handleSubmit} className="px-4 pb-4 text-center">
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-300 mb-2 text-lg"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-gray-300 mb-2 text-lg"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="Enter your email address"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Join Us
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormSlider;
