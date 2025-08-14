  "use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animates children one by one
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Floating Shapes - now with a smoother 'float' animation */}
      <div className="absolute -top-20 -left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/3 -right-12 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float [animation-delay:-3s]"></div>
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float [animation-delay:-1.5s]"></div>

      <motion.div
        className="relative z-10 container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white"
          variants={itemVariants}
        >
          About <span className="text-purple-400">Shadow AI</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
          variants={itemVariants}
        >
          Shadow AI lets you step into conversations with AI personas crafted to mimic your idols. Enjoy interactive, real-time chat powered by cutting-edge AI tech.
        </motion.p>

        {/* Bento Grid - Re-architected for full responsiveness */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={sectionVariants}
        >
          {/* Card 1: What is Shadow AI? */}
          <motion.div
            className="lg:col-span-2 md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: '0px 0px 20px rgba(192, 132, 252, 0.4)', // purple glow
              transition: { duration: 0.3 },
            }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">What is Shadow AI? 🤔</h3>
              <p className="text-gray-300 mb-4">
                A platform to chat with AI versions of your favorite personalities. Each persona has a unique tone, style, and knowledge base.
              </p>
            </div>
            <Image
              src="/preview_chat.png"
              alt="Chat Preview"
              width={500}
              height={300}
              className="rounded-lg mt-auto w-full h-auto"
            />
          </motion.div>

          {/* Card 2: Powered by AI */}
          <motion.div
            className="lg:col-span-1 md:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: '0px 0px 20px rgba(244, 114, 182, 0.4)', // pink glow
              transition: { duration: 0.3 },
            }}
          >
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Powered by AI 🧠</h3>
              <p className="text-gray-300 mb-4">
                Built on the Google Gemini API for natural, context-aware conversations.
              </p>
            </div>
            <Image
              src="/gemini.webp"
              alt="Gemini AI Logo"
              width={200}
              height={200}
              className="w-3/4 mx-auto h-auto object-contain mt-auto"
            />
          </motion.div>

          {/* Card 3: Tech Stack */}
          <motion.div
            className="lg:col-span-1 md:col-span-2 lg:md:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col shadow-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: '0px 0px 20px rgba(96, 165, 250, 0.4)', // blue glow
              transition: { duration: 0.3 },
            }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Tech Stack 🛠️</h3>
            <ul className="text-gray-300 space-y-3 flex-grow">
              <li><span className="text-purple-400">⚡</span> Next.js 14</li>
              <li><span className="text-blue-400">🎨</span> Tailwind CSS</li>
              <li><span className="text-pink-400">🤖</span> Google Gemini</li>
              <li><span className="text-yellow-400">🎬</span> Framer Motion</li>
            </ul>
            <Image
              src="/techstack.png"
              alt="Tech Stack Visual"
              width={400}
              height={200}
              className="rounded-lg mt-auto w-full h-[200px] object-cover"
            />
          </motion.div>

          {/* This empty div helps align the grid on medium screens */}
          <div className="hidden md:block lg:hidden md:col-span-1"></div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;