import Image from "next/image";
import Link from "next/link";

export default function Connect5() {
  return (
    <main className="min-h-screen bg-primary-gray py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold text-primary-black mb-6">
            Connect 5
          </h1>
          <Link
            href="https://github.com/ZisisKostakakis/Connect-5-game"
            className="inline-flex items-center space-x-2 text-xl text-primary-navy hover:text-primary-orange transition-colors duration-300 mb-8 group"
          >
            <Image
              src="/images/github-mark.png"
              width={30}
              height={30}
              alt="GitHub"
              className="transition-transform group-hover:scale-110 duration-300"
            />
            <span className="font-semibold">View on GitHub</span>
          </Link>
        </div>

        <div className="prose max-w-none animate-slide-up">
          <p className="text-lg sm:text-xl text-primary-navy mb-12 leading-relaxed">
            Connect-Five is a tic-tac-toe-like two-player game in which players
            alternately place pieces on a vertical board 8 columns across and 7
            rows high. Each player uses pieces of a particular color (commonly
            black and red, or sometimes yellow and red), and the object is to be
            the first to obtain five pieces in a horizontal, vertical, or
            diagonal line. Because the board is vertical, pieces inserted in a
            given column always drop to the lowest unoccupied row of that
            column. As soon as a column contains 7 pieces, it is full and no
            other piece can be placed in the column.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 animate-fade-in delay-[200ms]">
          <div className="group">
            <div className="relative rounded-xl overflow-hidden shadow-custom-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/0 to-primary-orange/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <Image
                src="/images/Connect-5-one.png"
                width={500}
                height={500}
                className="w-full h-auto"
                alt="Connect 5 Game Screenshot 1"
              />
            </div>
          </div>
          <div className="group">
            <div className="relative rounded-xl overflow-hidden shadow-custom-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/0 to-primary-orange/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <Image
                src="/images/Connect-5-two.png"
                width={500}
                height={500}
                className="w-full h-auto"
                alt="Connect 5 Game Screenshot 2"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
