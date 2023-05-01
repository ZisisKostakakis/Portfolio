import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between p-24">
      <div className="">
        <h1 className="text-6xl font-bold mb-8">
          Camera OCR
          <Link
            href="https://github.com/ZisisKostakakis/CameraOCR"
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
          IOS app that uses the Optical Character Recognition, used for taking
          pictures and converting the picture into text that can be used for
          text-to-speech, automaticaly detecting an email address and filling it
          on the mail app or for creating a to do list. It also allows the use
          of local scheduling notifications. This was the dissertation project
          that also combined machine learning to then read the text and detect
          the emotion of the text. To be used together with the email. So
          example use case would be, people that are not technological advanced
          could write a letter to their doctor and take a picture of it, to be
          send as an email with the emotion of the email attached as an extra
          feature. This can help the doctors understand the emotion of their
          patients and prioritise help where its needed.
        </p>

        <div className="flex flex-row justify-center space-x-10">
          <div>
            <h2 className="text-center font-bold text-2xl">First Demo</h2>
            <video width={400} height={400} controls>
              <source src="/videos/CameraOCR-one.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <h2 className="text-center font-bold text-2xl">Second Demo</h2>
            <video width={400} height={400} controls>
              <source src="/videos/CameraOCR-two.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}
