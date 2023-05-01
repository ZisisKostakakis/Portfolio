import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-start justify-between p-8 sm:p-24">
      <div className="">
        <h1 className="text-4xl sm:text-6xl font-bold mb-8">
          Connect 5
          <Link
            href="https://github.com/ZisisKostakakis/Connect-5-game"
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
        <p className="text-m sm:text-2xl mb-8">
          Connect-Five is a tic-tac-toe-like two-player game in which players
          alternately place pieces on a vertical board 8 columns across and 7
          rows high. Each player uses pieces of a particular color (commonly
          black and red, or sometimes yellow and red), and the object is to be
          the first to obtain five pieces in a horizontal, vertical, or diagonal
          line. Because the board is vertical, pieces inserted in a given column
          always drop to the lowest unoccupied row of that column. As soon as a
          column contains 7 pieces, it is full and no other piece can be placed
          in the column.
        </p>

        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:h-500">
          <Image
            src="/images/Connect-5-one.png"
            width={500}
            height={500}
            className="w-full sm:w-1/2 sm:h-auto sm:mr-2"
            style={{
              objectFit: "cover",
            }}
            alt=""
          />
          <Image
            src="/images/Connect-5-two.png"
            width={500}
            height={500}
            className="w-full sm:w-1/2 sm:h-auto sm:ml-2"
            style={{
              objectFit: "cover",
            }}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
