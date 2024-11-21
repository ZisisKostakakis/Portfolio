"use client";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const toggleButton = document.querySelector("[data-collapse-toggle]");
    const menu = document.querySelector("#navbar-default");

    const handleClick = () => {
      menu?.classList.toggle("hidden");
    };

    toggleButton?.addEventListener("click", handleClick);
    return () => toggleButton?.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary-black/95 backdrop-blur-sm shadow-custom-lg' : 'bg-primary-black'
    }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl text-primary-white hover:text-primary-orange transition-all duration-300">
            Zisis Kostakakis
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden text-primary-white hover:bg-primary-navy transition-colors duration-300"
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
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={item === 'Home' ? '/' : `/${item}`}
                  className="text-xl text-primary-white hover:text-primary-orange transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
