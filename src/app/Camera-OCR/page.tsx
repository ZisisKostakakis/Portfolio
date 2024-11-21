import Image from "next/image";
import Link from "next/link";

export default function CameraOCR() {
  return (
    <main className="min-h-screen bg-primary-gray py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold text-primary-black mb-6">
            Camera OCR
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="https://github.com/ZisisKostakakis/CameraOCR"
              className="inline-flex items-center space-x-2 text-xl text-primary-navy hover:text-primary-orange transition-colors duration-300 group"
            >
              <Image
                src="/images/github-mark.png"
                width={30}
                height={30}
                alt="GitHub"
                className="transition-transform group-hover:scale-110 duration-300"
              />
              <span className="font-semibold">GitHub Repository</span>
            </Link>
          </div>
        </div>

        <div className="prose max-w-none animate-slide-up">
          <p className="text-lg sm:text-xl text-primary-navy mb-12 leading-relaxed">
            IOS app that uses Optical Character Recognition for taking pictures
            and converting them into text. The text can be used for
            text-to-speech, automatically detecting email addresses and filling
            them in the mail app, or creating a to-do list. It also allows the
            use of local scheduling notifications. This dissertation project
            combined OCR with machine learning to detect the emotion of the
            text, particularly useful when sending emails. For example, less
            tech-savvy individuals could write a letter to their doctor, take a
            picture, and send it as an email with the detected emotion attached.
            This helps doctors understand their patients' emotional state and
            prioritize care accordingly.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="animate-fade-in delay-[200ms] mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-black mb-6">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[{ name: "Swift", icon: "/images/swift.svg" }].map((tech) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-black mb-6 text-center">
            Demo Videos
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl text-primary-navy text-center font-semibold">
                First Demo
              </h3>
              <div className="rounded-xl overflow-hidden shadow-custom-lg">
                <video className="w-full" controls>
                  <source src="/videos/CameraOCR-one.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl text-primary-navy text-center font-semibold">
                Second Demo
              </h3>
              <div className="rounded-xl overflow-hidden shadow-custom-lg">
                <video className="w-full" controls>
                  <source src="/videos/CameraOCR-two.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
