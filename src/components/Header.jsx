'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img src="/Next-Step-NIW.png" alt="Logo" width={60} height={60} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-[#383f65] font-semibold hover:underline">Home</Link>
          <Link href="/aboutus" className="text-gray-700 hover:text-[#1ac194]">About Us</Link>
          <Link href="/services" className="text-gray-700 hover:text-[#1ac194]">Services</Link>
          <Link href="/evaluation" className="text-gray-700 hover:text-[#1ac194]">Free CV Evaluation</Link>
          <Link href="/contact">
            <button className="bg-[#1ac194] text-white px-4 py-2 rounded-md hover:bg-[#17b897] transition cursor-pointer">Contact us</button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-blue-700 font-semibold">Home</Link>
          <Link href="/our-firm" className="block text-gray-700">Our Firm</Link>
          <Link href="/services" className="block text-gray-700">Services</Link>
          <Link href="/free-evaluation" className="block text-gray-700">Free Evaluation</Link>
          <Link href="/info-hub" className="block text-gray-700">Info Hub</Link>
          <Link href="/contact">
            <button className="w-full mt-2 bg-[#1ac194] text-white px-4 py-2 rounded-md hover:bg-[#17b897] transition">Contact us</button>
          </Link>
        </div>
      )}
    </header>
  );
}
