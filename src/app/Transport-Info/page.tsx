import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between p-24">
      <div>
        <h1 className="text-6xl font-bold mb-8">
          Transport Info
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
              Github
            </h1>
          </Link>
        </h1>
        <p className="text-2xl mb-8">
          Transport-Info Full Stack project utilising a frontend and a backend
          Backend is served by an AWS EC2 server running flask using gunicorn
          and nginx as webservers. Frontend is server by Vercel using NextJS 13
          and Typescript API are handled by the API Gateway with API
          authentication keys The data are store on S3 and DynamoDB and are
          fetched by the backend server upon request from the frontend.
        </p>
        <div className="flex items-center flex-row justify-center">
          <Link href="https://transport-info.vercel.app/">
            <h1 className="text-center font-bold text-2xl animate-bounce-slow">
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
