"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [openSections, setOpenSections] = useState({
    languages: false,
    cloud: false,
    frameworks: false,
    aws: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <main className="min-h-screen p-8 py-24 bg-primary-gray">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-6xl font-bold mb-4 sm:mb-8 text-center animate-fadeIn">
          About Me
        </h1>
        <p className="text-m sm:text-2xl mb-8 text-center animate-slideUp">
          Software Engineer specializing in back end development on AWS cloud
          with Python. Hands on experience in start-up company environment.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Technical Skills
          </h2>

          <div className="space-y-4">
            {/* Programming Languages Dropdown */}
            <div className="bg-white/5 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-white/10">
              <button
                onClick={() => toggleSection("languages")}
                className="w-full p-4 text-left text-xl font-semibold flex justify-between items-center transition-colors duration-200"
              >
                Programming Languages
                <span className="transition-transform duration-200">
                  {openSections.languages ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openSections.languages
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-4 space-y-3">
                  {[
                    { src: "/images/python-logo-only.png", name: "Python" },
                    {
                      src: "/images/icons8-typescript-48.png",
                      name: "TypeScript",
                    },
                    { src: "/images/icons8-java-50.png", name: "Java" },
                    { src: "/images/icons8-c++-48.svg", name: "C++" },
                    { src: "/images/icons8-bash.svg", name: "Bash" },
                    { src: "/images/swift.svg", name: "Swift" },
                    { src: "/images/flutter.svg", name: "Flutter" },
                    { src: "/images/terraform.svg", name: "Terraform" },
                  ].map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 transition-all duration-200 hover:translate-x-2"
                    >
                      <Image
                        src={lang.src}
                        width={40}
                        height={40}
                        alt={lang.name}
                        className="transform hover:scale-110 transition-transform duration-200"
                      />
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud Platforms Dropdown */}
            <div className="bg-white/5 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-white/10">
              <button
                onClick={() => toggleSection("cloud")}
                className="w-full p-4 text-left text-xl font-semibold flex justify-between items-center transition-colors duration-200"
              >
                Cloud Platforms
                <span className="transition-transform duration-200">
                  {openSections.cloud ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openSections.cloud
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-4 space-y-3">
                  {[
                    {
                      src: "/images/icons8-amazon-web-services.svg",
                      name: "AWS",
                    },
                    { src: "/images/icons8-docker.svg", name: "Docker" },
                    { src: "/images/vercel.svg", name: "Vercel" },
                    { src: "/images/kubernetes.svg", name: "Kubernetes" },
                  ].map((platform, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 transition-all duration-200 hover:translate-x-2"
                    >
                      <Image
                        src={platform.src}
                        width={40}
                        height={40}
                        alt={platform.name}
                        className="transform hover:scale-110 transition-transform duration-200"
                      />
                      <span>{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Frameworks Dropdown */}
            <div className="bg-white/5 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-white/10">
              <button
                onClick={() => toggleSection("frameworks")}
                className="w-full p-4 text-left text-xl font-semibold flex justify-between items-center transition-colors duration-200"
              >
                Frameworks
                <span className="transition-transform duration-200">
                  {openSections.frameworks ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openSections.frameworks
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-4 space-y-3">
                  {[
                    { src: "/images/icons8-flask.svg", name: "Flask" },
                    { src: "/images/next.svg", name: "NextJS 13" },
                  ].map((framework, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 transition-all duration-200 hover:translate-x-2"
                    >
                      <Image
                        src={framework.src}
                        width={40}
                        height={40}
                        alt={framework.name}
                        className="transform hover:scale-110 transition-transform duration-200"
                      />
                      <span>{framework.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AWS Services Dropdown */}
            <div className="bg-white/5 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-white/10">
              <button
                onClick={() => toggleSection("aws")}
                className="w-full p-4 text-left text-xl font-semibold flex justify-between items-center transition-colors duration-200"
              >
                AWS Services
                <span className="transition-transform duration-200">
                  {openSections.aws ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openSections.aws
                    ? "max-h-[800px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-4 space-y-3">
                  {[
                    { src: "/images/ec2.svg", name: "EC2" },
                    { src: "/images/lambda.svg", name: "Lambda" },
                    { src: "/images/ebs.svg", name: "EBS" },
                    { src: "/images/ecr.svg", name: "ECR" },
                    { src: "/images/cognito.svg", name: "Cognito" },
                    { src: "/images/cloudwatch.svg", name: "CloudWatch" },
                    { src: "/images/s3.svg", name: "S3" },
                    { src: "/images/dynamodb.svg", name: "DynamoDB" },
                    { src: "/images/iam.svg", name: "IAM" },
                    { src: "/images/api.svg", name: "API Gateway" },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 transition-all duration-200 hover:translate-x-2"
                    >
                      <Image
                        src={service.src}
                        width={40}
                        height={40}
                        alt={service.name}
                        className="transform hover:scale-110 transition-transform duration-200"
                      />
                      <span>{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Add these styles to your global.css
const styles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-in;
}

.animate-slideUp {
  animation: slideUp 0.6s ease-out;
}
`;
