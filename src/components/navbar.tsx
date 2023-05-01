import React from "react";

interface navbarProps {}

const Navbar: React.FC<navbarProps> = ({}) => {
  return (
    <nav className="border-gray-200 bg-yellow-950">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center ">
          <i className="fa-solid fa-bus fa-beat fa-2xl mr-3"></i>
          <span className="self-center whitespace-nowrap text-2xl font-bold text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-green-500">
            Zisis Kostakakis
          </span>
        </a>
        <div className=" w-full md:block md:w-auto">
          <ul
            className="mt-4 flex flex-col p-4 
          font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0"
          >
            <li>
              <a
                href="/"
                className="block rounded py-2 pl-3 pr-4 font-bold text-2xl text-white md:bg-transparent md:p-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  hover:text-green-500"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/About"
                className="block rounded py-2 pl-3 pr-4 text-white
                 md:border-0  md:p-0 md:hover:bg-transparent font-bold
                 hover:text-green-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-2xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="block rounded py-2 pl-3 pr-4 text-white
                  md:border-0 md:p-0 md:hover:bg-transparent font-bold
                   hover:text-green-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-2xl"
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
