import Image from "next/image";
import Link from "next/link";

export default function TransportInfo() {
  return (
    <main className="min-h-screen bg-primary-gray py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold text-primary-black mb-6">
            Transport Info
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="https://github.com/ZisisKostakakis/Transport-Info"
              className="inline-flex items-center space-x-2 text-xl text-primary-navy hover:text-primary-orange transition-colors duration-300 group"
            >
              <Image
                src="/images/github-mark.png"
                width={30}
                height={30}
                alt="GitHub"
                className="transition-transform group-hover:scale-110 duration-300"
              />
              <span className="font-semibold">Frontend Repository</span>
            </Link>
            <Link
              href="https://github.com/ZisisKostakakis/Web-app-python"
              className="inline-flex items-center space-x-2 text-xl text-primary-navy hover:text-primary-orange transition-colors duration-300 group"
            >
              <Image
                src="/images/github-mark.png"
                width={30}
                height={30}
                alt="GitHub"
                className="transition-transform group-hover:scale-110 duration-300"
              />
              <span className="font-semibold">Backend Repository</span>
            </Link>
          </div>
        </div>

        <div className="prose max-w-none animate-slide-up">
          <p className="text-lg sm:text-xl text-primary-navy mb-12 leading-relaxed">
            Transport-Info Full Stack project utilising a frontend and a
            backend. Backend is served by an AWS EC2 server running flask using
            gunicorn and nginx as webservers. Frontend is served by Vercel using
            NextJS 13 and Typescript. API are handled by the API Gateway with
            API authentication keys. The data are stored on S3 and DynamoDB and
            are fetched by the backend server upon request from the frontend.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="animate-fade-in delay-[200ms] mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-black mb-6">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { name: "AWS EC2", icon: "/images/ec2.svg" },
              { name: "AWS Lambda", icon: "/images/lambda.svg" },
              { name: "AWS S3", icon: "/images/s3.svg" },
              { name: "DynamoDB", icon: "/images/dynamodb.svg" },
              { name: "API Gateway", icon: "/images/api.svg" },
              { name: "NextJS", icon: "/images/next.svg" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center space-x-3 p-4 rounded-lg bg-white shadow-custom hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={tech.icon}
                  width={30}
                  height={30}
                  alt={tech.name}
                  className="w-8 h-8"
                />
                <span className="text-primary-navy font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in delay-[300ms]">
          <Link href="https://www.transports-info.com/" className="block group">
            <h3 className="text-center font-bold text-xl sm:text-2xl text-primary-navy mb-4 group-hover:text-primary-orange transition-colors duration-300">
              Visit Live Site
            </h3>
            <div className="relative rounded-xl overflow-hidden shadow-custom-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/0 to-primary-orange/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <Image
                className="w-full h-auto"
                src="/images/Transport-Info.png"
                width={800}
                height={800}
                alt="Transport Info Website Screenshot"
              />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
