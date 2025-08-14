"use client"
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import AboutSection from "@/components/about";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative bg-[#121212] text-white min-h-screen font-sans overflow-hidden">
      {/* ======== Abstract Floating Shapes ======== */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute top-1/3 left-1/2 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-bounce"></div>

      <div className="container mx-auto p-8 relative z-10">
        {/* ======== Navbar ======== */}
        <nav className="flex justify-between items-center mb-24">
          <h1 className="text-xl md:text-3xl font-bold tracking-[0.2em]">SHADOW AI</h1>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Xta1neR/GenAIwithJS/tree/main/Project_02-ShadowAi"
              aria-label="GitHub Repository"
              className="hover:text-gray-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://xta1ner.github.io/portfolio-website/"
              className="text-sm font-semibold border px-3 py-1 rounded-md hover:bg-white hover:text-black transition-colors"
            >
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
              <Link
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
              </Link>

              <Link
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
              </Link>
            </div>
          </div>

          {/* ---- Right Column ---- */}
          <div className="hidden md:flex w-full h-[500px] bg-[#1e1e1e] rounded-2xl p-6 relative overflow-hidden">
            {/* Floating Shapes */}
            <motion.div
              className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
              animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-60 h-60 bg-pink-500/20 rounded-full blur-3xl"
              animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Demo Conversation */}
            <div className="relative z-10 flex flex-col gap-4 w-full p-8">
              {/* Title */}
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-purple-400" />
                <h3 className="text-xl font-bold text-white">Live Persona Prompting</h3>
              </div>

              {/* Chat Bubbles */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-purple-500/20 p-3 rounded-xl self-start max-w-[80%]"
              >
                <p className="text-white">
                  “You are [someone]. Greet the user with energy!”
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="bg-gray-700 p-3 rounded-xl self-end max-w-[80%]"
              >
                <p className="text-gray-100">
                  Hey there, champ! 🚀 Ready to conquer some code today?
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="bg-purple-500/20 p-3 rounded-xl self-start max-w-[80%]"
              >
                <p className="text-white">
                  “Explain what a JavaScript closure is like you&#39;re talking to a 10-year-old.”
                </p>
              </motion.div>

              {/* Typing Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="bg-gray-700 p-3 rounded-xl self-end max-w-[40%] flex gap-1"
              >
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-400"></span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ======== ABOUT ======== */}
      <AboutSection />

      {/* ======== Footer ======== */}
      <footer className="mt-20 border-t border-gray-800 p-6 text-center text-gray-400 text-sm relative z-10">
        <p>
          © {new Date().getFullYear()} Shadow AI — Built with ❤️ by{" "}
          <a
            href="https://xta1ner.github.io/portfolio-website/"
            className="hover:text-white"
          >
            Rituraj Goswami
          </a>
        </p>

      </footer>
    </main>
  );
}
