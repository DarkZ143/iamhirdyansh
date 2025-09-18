"use client";

import Link from "next/link";
import { Code2, Cpu, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative pt-20">
      
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-snug">
          Hi, I&apos;m <span className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Hirdyansh Singh</span>
        </h1>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-gray-300">
          Software Engineer @ Wipro
        </h2>
        <p className="mt-6 text-gray-400 max-w-xl">
          I craft scalable software solutions, blending code with creativity.
          Focused on building impactful products using real-world tech.
        </p>

        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30 hover:scale-105 transition"
          >
            See My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl font-medium border border-cyan-400 text-purple-500 hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:text-white transition"
          >
            Let’s Connect
          </Link>
        </div>
      </div>

      {/* Right Side - 3D / Tech Styled Elements */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-cyan-500/30 to-blue-700/30 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(0,255,255,0.3)] backdrop-blur-md border border-cyan-400/20">
          <Terminal className="w-20 h-20 text-cyan-400 animate-pulse" />
          <Cpu className="absolute top-6 right-6 w-10 h-10 text-blue-500 animate-spin-slow" />
          <Code2 className="absolute bottom-6 left-6 w-10 h-10 text-purple-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
