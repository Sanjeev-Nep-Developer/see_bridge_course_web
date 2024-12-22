import React from "react";
import img from "/assets/images/logo.png";

const Homepage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-5 py-24">
        <div className="w-full md:w-2/5 mb-16 md:mb-0">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src={img}
          />
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Padhega Nepal
          </h1>
          <p className="mb-8 leading-relaxed">
            Embark on a journey of knowledge with Padhega Nepal's Bridge
            Courses, designed to uplift aspirations and empower futures. Our
            platform offers affordable access to invaluable content, ensuring
            that learning knows no boundaries.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full md:w-auto bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-4 md:mr-4 mb-4 md:mb-0"
              placeholder="Placeholder"
            />
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            Some buttons Might not work
          </p>
          <div className="flex">
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none mr-4">
              <span className="ml-4 flex flex-col leading-none">
                <a href="/bridge">
                  <span className="title-font font-medium">
                    Get Bridge Course
                  </span>
                </a>
              </span>
            </button>
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <span className="ml-4 flex flex-col leading-none">
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdUq5Dl5U__QpR0OE8wQcSQn-ITaEZtnQjIHKH8Qi1dTAPhiA/viewform?usp=sf_link"
                >
                  <span className="title-font font-medium">
                    Get <br></br>Registration Form
                  </span>
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
      s
    </section>
  );
};

export default Homepage;
