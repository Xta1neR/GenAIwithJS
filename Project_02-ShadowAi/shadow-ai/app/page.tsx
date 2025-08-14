import { Github } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="bg-[#121212] text-white min-h-screen font-sans">
      <div className="container mx-auto p-8">

        {/* ======== Navbar ======== */}
        <nav className="flex justify-between items-center mb-24">
          <h1 className="text-3xl font-bold tracking-[0.2em]">SHADOW AI</h1>
          <div className="hidden md:flex items-center gap-8 font-semibold">
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub Repository" className="hover:text-gray-300">
              <Github size={24} />
            </a>
            <a href="#" className="text-sm font-semibold border px-3 py-1 rounded-md hover:bg-white hover:text-black transition-colors">
              VISIT MY PORTFOLIO
            </a>
          </div>
        </nav>

        {/* ======== Main Content Area ======== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ---- Left Column ---- */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-5xl font-extrabold tracking-wide">
                WELCOME TO THE REALM OF SHADOWS
              </h2>
              <p className="text-gray-400 font-medium">
                INTERACT WITH YOUR IDOL FOR FREE
              </p>
            </div>

            {/* Persona Selection Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href="/chat/hitesh-choudhary"
                className="flex items-center p-4 bg-[#2a2a2a] rounded-xl hover:bg-[#3a3a3a] transition-colors"
              >
                <Image
                  src="/hitesh.jpg"
                  alt="Hitesh Choudhary"
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <span className="text-xl font-semibold">HITESH CHOUDHARY</span>
              </a>
              <a
                href="/chat/piyush-garg"
                className="flex items-center p-4 bg-[#2a2a2a] rounded-xl hover:bg-[#3a3a3a] transition-colors"
              >
                <Image
                  src="/piyush.jpg"
                  alt="Piyush Garg"
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <span className="text-xl font-semibold">PIYUSH GARG</span>
              </a>
            </div>
          </div>

          {/* ---- Right Column ---- */}
          <div className="hidden md:flex w-full h-[500px] bg-[#2a2a2a] rounded-2xl items-center justify-center">
            {/* This will later hold the chat interface or an image */}
            <p className="text-gray-500">Chat Area</p>
          </div>
        </div>
      </div>
    </main>
  );
}