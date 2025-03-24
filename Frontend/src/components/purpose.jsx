import React from "react";

const purpose = () => {
  return (
    <div className=" max-w-7xl mx-auto  mb-24 px-4 sm:px-6 lg:px-8 py-12">
      <div>
        <div className="mb-20">
     <div className="text-blue-900 mb-2 max-w-fit font-semibold text-sm  lg:text-center lg:mx-auto  bg-purple-100 px-4 py-1 rounded-full" >
Our Solutions
     </div>
          <h1 className="text-4xl font-bold pb-4 md:text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Built with Purpose, Delivered with Precision
          </h1>
          <p className="item-center md:text-center lg:w-1/2 mx-auto font-semibold text-blue-900 ">
            You get a start-to-finish solution from people who know the trade
            and take pride in delivering clean, compliant, and
            contractor-approved installs.
          </p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-8 ">
          <div className=" bg-gray-100 p-10 rounded-xl  ">
            <div className="text-blue-900">
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-center pt-2 font-bold text-yellow-500">
              Manufacturing & Supply
            </h3>
            <p className="text-center font-semibold text-blue-900">
              High-quality concrete wheel stops
            </p>
          </div>
          <div className=" bg-gray-100 p-10 rounded-xl  ">
            <div className="text-blue-900">
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m1 0h1m-1-5h1m1 0h1m-5 5h1m1 0h1M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
                />
              </svg>
            </div>
            <h3 className="text-center pt-2 font-bold text-yellow-500">
              {" "}
              Bulk Orders & Pricing
            </h3>
            <p className="text-center font-semibold text-blue-900">
              {" "}
              Wholesale solutions for contractors & developers
            </p>
          </div>
          <div className=" bg-gray-100 p-10 rounded-xl  ">
            <div className="text-blue-900">
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            </div>
            <h3 className="text-center pt-2 font-bold text-yellow-500">
              {" "}
              Full-Service Delivery
            </h3>
            <p className="text-center font-semibold text-blue-900">
              {" "}
              Including on-site installation
            </p>
          </div>
          <div className=" bg-gray-100 p-10 rounded-xl  ">
            <div className="text-blue-900">
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="text-center pt-2 font-bold text-yellow-500">
              Site Assessments
            </h3>
            <p className="text-center font-semibold text-blue-900">
              New or replacement projects
            </p>
          </div>
        </div>
      </div>
      <div class="mt-16 text-center">
      <div class="inline-flex flex-col md:flex-row gap-5 md:gap-0 items-center bg-white px-8 py-4 rounded-full shadow-lg">
        <span class="text-slate-700 mr-4 font-semibold text-blue-900  ">🚀 Ready to start your project?</span>
        <button class="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors transition-all duration-300">
          Schedule Consultation
        </button>
      </div>
    </div>
    </div>
  );
};

export default purpose;
