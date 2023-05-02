import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-start justify-between p-8 sm:p-24">
      <div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-8">
          <div className="flex flex-row">
            <h1>Transport Info</h1>
            <h1 className="text-xl animate-pulse"> Work in Progress</h1>
          </div>
          <div className="flex-row flex">
            <Link
              href="https://github.com/ZisisKostakakis/Transport-Info"
              className="text-2xl mb-8 text-red-900 flex space-x-2 items-center p-2"
            >
              <Image
                src="/images/github-mark.png"
                width={30}
                height={30}
                alt=""
              />{" "}
              <h1 className=" transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Github Frontend
              </h1>
            </Link>
            <Link
              href="https://github.com/ZisisKostakakis/Web-app-python"
              className="text-2xl mb-8 text-red-900 flex space-x-2 items-center p-2"
            >
              <Image
                src="/images/github-mark.png"
                width={30}
                height={30}
                alt=""
              />{" "}
              <h1 className=" transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Github Backend
              </h1>
            </Link>
          </div>
        </h1>
        <p className="text-m sm:text-2xl mb-8">
          Transport-Info Full Stack project utilising a frontend and a backend
          Backend is served by an AWS EC2 server running flask using gunicorn
          and nginx as webservers. Frontend is server by Vercel using NextJS 13
          and Typescript API are handled by the API Gateway with API
          authentication keys The data are store on S3 and DynamoDB and are
          fetched by the backend server upon request from the frontend.
        </p>
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:h-500">
          <Link href="https://www.transports-info.com/">
            <h1 className="text-center font-bold text-m sm:text-2xl animate-bounce-slow">
              Click Image
            </h1>
            <Image
              className="cursor-pointer  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              src="/images/Transport-Info.png"
              width={800}
              height={800}
              alt=""
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
