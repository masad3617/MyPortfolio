import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/bg-2.jpg)" }}>
        <div className={`z-[10] max-w-[750px] px-5 sm:px-10 md:px-20 py-10 sm:py-20 flex flex-col items-center justify-start gap-5`}>
          <div className="flex items-center"> {/* Added flex container */}
            <h1 className="text-[24px] sm:text-[30px] md:text-[30px] text-white font-semibold">
              Hello, it's Me{" :)"}
              <span className="text-[30px] sm:text-[50px] md:text-[60px] text bg-clip-text bg-gradient-to-r from-purple-500 to-red-500" style={{ whiteSpace: "nowrap" }}>
                {" "}
                <br />
                Mohd Asad
                <br />
                I'm a software developer
              </span>
            </h1>
            <div className="ml-5 flex items-center">
              <a
                href="https://drive.google.com/file/d/1VHljl1s8G_8guITVvTa222CVH4V-QqmA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent rounded-full hover:bg-gradient-to-r from-purple-500 to-red-500 border-purple-500 border-2 px-3 py-1 text-sm sm:text-base md:text-lg text-white max-w-[200px] mx-auto sm:mx-0 font-bold"
              >
              <span className="ml-2 text-white font-bold">Download Resume</span>
              </a>
              
            </div>
          </div>
          <p className="text-justify text-white text-[10px] sm:text-[15px] md:text-[15px]">
            A motivated and skilled Software Developer seeking an opportunity to leverage my expertise in Next.js, Node.js, Nest.js, TypeScript, React.js, and various web technologies to contribute to the development of innovative and scalable applications. With a strong background in backend development, microservices architecture, and API design, I aim to create robust and efficient solutions that enhance user experience and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-5">
            <Link href="/my-skills" className="rounded-[60px] group relative bg-transparent hover:bg-gradient-to-r from-purple-500 to-red-500 px-5 border-purple-500 border-2 py-3 text-sm sm:text-base md:text-lg text-white max-w-[200px] mx-auto sm:mx-0 font-bold">
              Skills
            </Link>
            <Link href="/my-experience" className="rounded-[60px] group relative bg-transparent hover:bg-gradient-to-r from-purple-500 to-red-500 px-5 border-purple-500 border-2 py-3 text-sm sm:text-base md:text-lg text-white max-w-[200px] mx-auto sm:mx-0 font-bold">
              Experience
            </Link>
            <Link href="/my-projects" className="rounded-[60px] group relative bg-transparent hover:bg-gradient-to-r from-purple-500 to-red-500 px-5 border-purple-500 border-2 py-3 text-sm sm:text-base md:text-lg text-white max-w-[200px] mx-auto sm:mx-0 font-bold">
              Projects
            </Link>
            <Link href="/contact-me" className="rounded-[60px] group relative bg-transparent hover:bg-gradient-to-r from-purple-500 to-red-500 px-5 border-purple-500 border-2 py-3 text-sm sm:text-base md:text-lg text-white max-w-[200px] mx-auto sm:mx-0 font-bold">
              Contact me
            </Link>
          </div>
        </div>
      </div>
      <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-10 left-0 z-[10]" />
    </main>
  );
}
