"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLoader } from "@/app/components/LoaderContext";

export default function Footer() {
  const router = useRouter();
  const { showLoader } = useLoader();

  const handleNav = (href: string) => {
    showLoader(2000); // show loader for 2s
    setTimeout(() => {
      router.push(href);
    }, 2000);
  };

  return (
    <footer className="bg-black text-gray-300 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + socials */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {"<Hirdyansh/>"}
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Building tomorrow&apos;s software with today&apos;s code.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-cyan-400"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-cyan-400"
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-cyan-400"
            >
              <Twitter />
            </a>
            <a href="mailto:test@email.com" className="hover:text-cyan-400">
              <Mail />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <button
                onClick={() => handleNav("/")}
                className="hover:text-cyan-400"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/about")}
                className="hover:text-cyan-400"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/contact")}
                className="hover:text-cyan-400"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Stay Updated
          </h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-l-md bg-gray-800 border border-cyan-400/30 focus:outline-none text-white"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-black px-4 py-2 rounded-r-md hover:bg-cyan-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cyan-500/20 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hirdyansh Singh • All Rights Reserved
      </div>
    </footer>
  );
}
