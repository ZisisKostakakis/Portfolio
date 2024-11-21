import Image from "next/image";
import { Inter } from "next/font/google";
import CardLink from "@/components/cardlink";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-8 lg:px-16 font-sans bg-primary-gray">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl font-semibold text-primary-black animate-fade-in">
            Welcome! 👋
          </h1>
          <h2 className="text-2xl sm:text-3xl text-primary-navy animate-slide-up">
            Full Stack Engineer
          </h2>
          <p className="text-lg sm:text-xl text-primary-navy max-w-2xl mx-auto animate-slide-up delay-[200ms]">
            Passionate about building innovative solutions and turning complex
            problems into elegant applications
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold text-primary-black text-center mb-12 animate-[bounce_2s_infinite]">
          Projects
        </h2>
        <div className="grid gap-8 sm:gap-10 px-4">
          {[
            {
              href: "/Connect-5",
              title: "Connect 5 Java Game",
              description:
                "Java Game with Graphical User Interface and AI Implementation.",
              delay: "delay-[100ms]",
            },
            {
              href: "/Camera-OCR",
              title: "CameraOCR",
              description:
                "IOS App that uses OCR to detect text from camera and ML Emotion Detection.",
              delay: "delay-[200ms]",
            },
            {
              href: "/Transport-Info",
              title: "Transport Info",
              description:
                "Full Stack Web App on AWS that uses public transport data to provide information to users.",
              delay: "delay-[300ms]",
            },
          ].map((project) => (
            <div
              key={project.href}
              className={`animate-fade-in ${project.delay}`}
            >
              <CardLink {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
