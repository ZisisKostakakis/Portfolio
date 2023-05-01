import React from "react";

interface cardLinkProps {
  href: string;
  title: string;
  description: string;
}
const CardLink: React.FC<cardLinkProps> = ({ href, title, description }) => {
  return (
    <div className="rounded-lg shadow-md bg-yellow-950 border-yellow-950">
      <div className="p-5 ">
        <a href={href}>
          <h5 className="mb-2 text-2xl font-bold  text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-10 hover:text-green-500">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-white ">{description}</p>
        <a
          href={href}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
export default CardLink;
