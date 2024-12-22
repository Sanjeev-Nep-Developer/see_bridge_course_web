import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="text-gray-600 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span
            className="ml-4 text-xl"
            style={{ color: "red", fontWeight: "bolder" }}
          >
            Padhega
          </span>
          <span
            className="ml-4 text-xl"
            style={{ color: "black", fontWeight: "bolder" }}
          >
            Nepal
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900"><a href="/">Home</a></a>
          <a className="mr-5 hover:text-gray-900"><a href="#courseOverView">Courses OverView</a></a>
          <a className="mr-5 hover:text-gray-900"><a href="#teamContent">Team</a></a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Get Started
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
