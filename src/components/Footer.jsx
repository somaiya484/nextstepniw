'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Instagram,
  PhoneCall
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative  pt-10 pb-4 bg-gray-100">

      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Logo */}
        <img src="/Next-Step-NIW.png" alt="Logo" width={80} height={60} />

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center space-x-6 font-semibold underline text-sm">
          <Link href="/appointment">Appointment</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-3">
          <a target='blank' href="https://www.linkedin.com/company/next-step-niw/" className="bg-white p-3 rounded-full text-[#0077b5] hover:scale-110 transition">
            <Linkedin size={20} />
          </a>
          <a target='blank' href="https://www.instagram.com/nextstepniw?igsh=dGlidHR3MmE4MDB4" className="bg-white p-3 rounded-full text-[#E1306C] hover:scale-110 transition">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t  text-center text-sm pt-3 ">
        ©{currentYear}. Next Setp NIW. All Rights Reserved.
      </div>
    </footer>
  );
}
