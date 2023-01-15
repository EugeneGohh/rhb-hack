import Head from "next/head";
import Image from "next/image";
import ratioscale from "./image/ratioscale.png";
import Link from "next/link";
import achievements from "./image/achievements.png";
import NextButton from "../../components/NextButton";
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ZEE BY RHB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen px-12 py-10 h-screen'>
      <Link legacyBehavior href='/card-expenses'>
          <a className='text-3xl text-purple-700 pt-10'>
            <AiOutlineArrowLeft />
          </a>
        </Link>
        <div className="text-center py-10">
          <div className="flex justify-center">
            <div>
              <div className="flex justify-center">
                <Image src={ratioscale} alt="image" />
              </div>
              <div className="flex justify-center">
                <Image src={achievements} alt="image" />
              </div>
              <div className="pt-10">
                <h3 className="text-gray-800">Necessities</h3>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-800 items-center pr-6 md:pr-20">
                    RM0
                  </span>
                  <span className="text-base font-medium text-gray-800 items-center px-6 md:px-20">
                    RM1500
                  </span>
                  <span className="text-base font-medium text-gray-800 items-center pl-6 md:pl-20">
                    RM3000
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div className="w-3/4 bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>
              <div className="pt-5">
                <h3 className="text-gray-800">Wants</h3>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-800 items-center pr-6 md:pr-20">
                    RM0
                  </span>
                  <span className="text-base font-medium text-gray-800 items-center px-6 md:px-20">
                    RM1500
                  </span>
                  <span className="text-base font-medium text-gray-800 items-center pl-6 md:pl-20">
                    RM3000
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div className="w-2/4 bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>
              <div className="pt-5">
                <h3 className="text-gray-800">Savings</h3>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-800 items-center pr-6 md:pr-20">
                    RM0
                  </span>
                  <span className="text-base font-medium text-gray-800 items-center px-6 md:px-20">
                    RM1500
                  </span>
                  <span className="text-base font-medium text-gray-800 items-center pl-6 md:pl-20">
                    RM3000
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div className="w-1/4 bg-blue-600 h-2.5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}