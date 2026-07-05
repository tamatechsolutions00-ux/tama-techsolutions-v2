"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#020b35]/95 backdrop-blur-md border-b border-blue-900 shadow-lg">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="TAMA TECHSOLUTIONS"
              width={55}
              height={55}
              className="rounded-lg"
            />

            <div>
              <h2 className="text-white font-bold text-lg leading-none">
                TAMA
              </h2>

              <p className="text-cyan-400 text-xs tracking-wider">
                TECHSOLUTIONS
              </p>
            </div>

          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-7 text-white font-medium">

            <Link href="/" className="hover:text-cyan-400 transition">
              Home
            </Link>

            <Link href="/services" className="hover:text-cyan-400 transition">
              Services
            </Link>

            <Link href="/about" className="hover:text-cyan-400 transition">
              About Us
            </Link>

            <Link href="/pricing" className="hover:text-cyan-400 transition">
              Pricing
            </Link>

            <Link href="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>

            <a
              href="#ai"
              className="hover:text-cyan-400 transition"
            >
              AI Assistant
            </a>

            <a
              href="https://wa.me/918603388869?text=Hello%20TAMA%20TECHSOLUTIONS,%20I%20need%20information%20about%20Website,%20App,%20Software%20or%20AI%20Solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-5 py-2.5 rounded-xl font-bold transition"
            >
              Free Consultation
            </a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-[#07195f] border-t border-blue-900">

          <div className="flex flex-col p-5 text-white gap-4">

            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>

            <Link href="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <a
              href="#ai"
              onClick={() => setMenuOpen(false)}
            >
              AI Assistant
            </a>

            <a
              href="https://wa.me/918603388869?text=Hello%20TAMA%20TECHSOLUTIONS,%20I%20need%20information%20about%20Website,%20App,%20Software%20or%20AI%20Solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-black text-center py-3 rounded-xl font-bold"
            >
              Free Consultation
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}