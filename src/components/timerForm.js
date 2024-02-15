import React, { useState, useEffect } from "react";

const CountdownForm = () => {
  const [countDown, setCountDown] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Check if timer has surpassed 10 minutes
      if (countDown <= 0) {
        setCountDown(0); // Prevent negative values
        clearInterval(intervalId); // Stop the timer
        return; // Exit early to avoid unnecessary updates
      }

      setCountDown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(intervalId); // Clear timer on unmount
  }, []);

  const hours = Math.floor(countDown / (60 * 60)) % 24; // Calculate hours in 24-hour format (optional)
  const minutes = Math.floor((countDown % (60 * 60)) / 60);
  const seconds = countDown % 60;

  return (
    <div className=" flex justify-center">
      <form className="signup-form bg-slate-800 shadow-md rounded-lg px-8 pt-6 pb-8 mt-10 ml-3 mr-3 max-w-md mx-auto items-center text-center ">
        <h2 className="text-2xl font-bold text-yellow-400 tracking-wider mb-4">
          Time is running out. <br />
          Grab your spot fast!
        </h2>
        <span className="countdown-display text-2xl font-bold text-red-500">
          {`${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
        </span>

        {countDown > 0 && ( // Show form fields only if countdown is active
          <>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full block mt-4 px-3 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              className="block w-full mt-4 py-2 text-center bg-yellow-500 hover:bg-yellow-700 font-bold text-black rounded-md focus:outline-none transition-all duration-300 ease-in-out"
            >
              Sign Up Now!
            </button>
          </>
        )}

        {countDown === 0 && ( // Display message when timer ends
          <p className="text-lg text-center font-semibold">
            The countdown has ended.
          </p>
        )}
      </form>
    </div>
  );
};

export default CountdownForm;
