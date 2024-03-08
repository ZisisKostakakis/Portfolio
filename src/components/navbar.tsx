"use client";
import React, { useEffect } from "react";

interface navbarProps {}

const Navbar: React.FC<navbarProps> = ({}) => {
  useEffect(() => {
    const toggleButton = document.querySelector("[data-collapse-toggle]");
    const menu = document.querySelector("#navbar-default");

    toggleButton?.addEventListener("click", () => {
      menu?.classList.toggle("hidden");
    });

    return () => {
      toggleButton?.removeEventListener("click", () => {
        menu?.classList.toggle("hidden");
      });
    };
  }, []);

  return (
    <nav className="border-gray-200 bg-slate-600 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-sans">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl whitespace-nowrap text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-400">
            Zisis Kostakakis
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className=" md:block md:w-auto text-center justify-between items-center hidden font-sans "
          id="navbar-default"
        >
          <ul
            className="mx-auto mt-4 flex flex-row p-4 max-w-screen-xl
             sm:mt-0 sm:flex-row sm:space-x-8 sm:border-0 sm:p-0
              rounded-lg"
          >
            <li>
              <a
                href="/"
                className="block rounded py-2 pl-3 pr-4 md:text-2xl text-white md:bg-transparent md:p-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  hover:text-blue-400"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/About"
                className="block rounded py-2 pl-3 pr-4 text-white
                 md:border-0  md:p-0 md:hover:bg-transparent 
                 hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-2xl
                 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="block rounded py-2 pl-3 pr-4 text-white
                  md:border-0 md:p-0 md:hover:bg-transparent
                   hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-2xl"
              >
                Contact
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
