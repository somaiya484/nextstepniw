'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm w-full z-50  pb-2 mb-2">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className='flex justify-center items-center'>
          <img src="/Primary Logo-01.png" alt="Logo" width={140} height={140} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-[#383f65] hover:underline">Home</Link>
          <Link href="/aboutus" className="text-gray-700 hover:text-[#1ac194]">About Us</Link>
          <Link href="/services" className="text-gray-700 hover:text-[#1ac194]">Services</Link>
          <Link href="/testimonials" className="text-gray-700 hover:text-[#1ac194]">Testimonials</Link>
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
          <Link href="/" className="block text-blue-700">Home</Link>
          <Link href="/aboutus" className="block text-gray-700">About Us</Link>
          <Link href="/services" className="block text-gray-700">Services</Link>
          <Link href="/evaluation" className="block text-gray-700">Free Evaluation</Link>
          <Link href="/testimonials" className="block text-gray-700">Testimonials</Link>
          <Link href="/contact">
            <button className="w-full mt-2 bg-[#1ac194] text-white px-4 py-2 rounded-md hover:bg-[#17b897] transition">Contact us</button>
          </Link>
        </div>
      )}
    </header>
  );
}
