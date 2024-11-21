import React from "react";

interface cardLinkProps {
  href: string;
  title: string;
  description: string;
}

const CardLink: React.FC<cardLinkProps> = ({ href, title, description }) => {
  return (
    <div className="group w-full">
      <div className="rounded-xl bg-primary-navy transition-all duration-300 hover:shadow-custom-lg hover:-translate-y-1 overflow-hidden border-2 border-primary-orange animate-fade-in">
        <div className="p-8 relative">
          <a href={href} className="block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/0 to-primary-orange/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <h5 className="mb-4 text-2xl font-bold text-primary-white group-hover:text-primary-orange transition-colors">
              {title}
            </h5>
            <p className="mb-6 text-primary-gray text-lg leading-relaxed">{description}</p>
            <div className="flex items-center text-primary-orange font-medium group-hover:text-primary-white transition-colors">
              Explore Project
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2 duration-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardLink;
