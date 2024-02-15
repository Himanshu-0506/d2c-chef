import React from "react";

const Card = () => {
  return (
    <section class="text-gray-600 body-font text-center bg-slate-900">
      <div class="container mx-auto max-w-2xl  text-center mt-10 p-5 rounded-lg shadow-md">
        <h1 class="text-yellow-500 text-3xl mt-5">
          This isn't just another consultancy program. <br /> it's a
          transformative journey led by a proven D2C champion.
        </h1>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-400 text-yellow-600 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-white text-lg title-font font-medium mb-2">
              Master the Art of Food & Business with Darsheel :
            </h2>
            <p class="leading-relaxed text-gray-300 text-base">
              Gain insights from Darsheel Savla, the co-founder of PatilKaki,
              <br />
              who blends his passion for food, people, and brand building into
              his success.
            </p>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-white text-lg title-font font-medium mb-2">
              Fast-Track Your Success with Darsheel's Mentorship :
            </h2>
            <p class="leading-relaxed text-gray-300 text-base">
              his program isn't just about information, it's about
              transformation. <br /> Join Darsheel's community and tap into his
              mentorship, accelerating your learning curve and <br /> propelling
              your business forward.
            </p>
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-400 text-yellow-600 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-400 text-yellow-600 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-white text-lg title-font font-medium mb-2">
              Conquer the D2C Challenge with Darsheel's Expertise :
            </h2>
            <p class="leading-relaxed text-gray-300 text-base">
              Darsheel, a visionary D2C leader, launches his consultancy program
              to guide fellow founders. <br /> Get expert advice and overcome
              the hurdles of going Direct-to-Consumer, accelerating your growth
              journey.
            </p>
          </div>
        </div>
        {/* 
        <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
      </div>
    </section>
  );
};

export default Card;
