import Image from "next/image";
import { Inter } from "next/font/google";
import CardLink from "@/components/cardlink";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen text-center flex-col justify-between sm:p-24 p-8 font-sans">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-semibold text-black-600">
          Hello my name is, Zisis
        </h1>
        <h2 className="text-xl sm:text-4xl text-black-600 py-2 sm:py-4">
          I am Backend Software Engineer
        </h2>

        <Image
          className="p-10 rounded-full"
          src="/images/Profile.png"
          width={600}
          height={600}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-6xl text-black-600 text-center p-4 animate-[bounce_2s_infinite]">
          Projects
        </h1>
        <div className="p-4 space-y-10 ">
          <CardLink
            href="/Connect-5"
            title="Connect 5 Java Game"
            description="Java Game with Graphical User Interface and AI Implementation."
          />
          <CardLink
            href="/Camera-OCR"
            title="CameraOCR"
            description="IOS App that uses OCR to detect text from camera and ML Emotion Detection."
          />
          <CardLink
            href="/Transport-Info"
            title="Transport Info"
            description="Full Stack Web App on AWS that uses public transport data to provide information to users."
          />
        </div>
      </div>
    </main>
  );
}
