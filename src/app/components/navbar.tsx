"use client";

import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { useLoader } from "@/app/components/LoaderContext";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { showLoader } = useLoader();

  const handleNav = (href: string) => {
    if (pathname === href) return; // already on page, do nothing
    showLoader(2000); // show loader for 2s
    setTimeout(() => {
      router.push(href);
    }, 2000);
  };

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md border-b border-cyan-500/30 bg-black/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("/")}
          className="text-xl font-extrabold text-cyan-400 tracking-wide"
        >
          {"<Hirdyansh/>"}
        </button>

        {/* Links */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNav(item.href)}
              className={clsx(
                "relative font-medium transition hover:text-cyan-400 cursor-pointer",
                pathname === item.href ? "text-cyan-400" : "text-gray-300"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
