// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full p-4 absolute">
      <div className="max-w-7xl mx-auto block md:flex justify-between items-center">
        {/* Logo */}
        <div className="flex pb-5 md:pb-0 justify-center md:block">
          <Link href="/">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Menu */}
        <ul className="flex  justify-center space-x-12 text-base text-black font-medium bg-white py-4 px-4 rounded-[20px]">
          <li>
            <Link href="/" className="">Home</Link>
          </li>
          <li>
            <Link href="/about" className="">About</Link>
          </li>
          <li>
            <Link href="/solutions" className="">Solutions</Link>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-custom-green text-sm hover:bg-green-700 text-white py-3 px-6 rounded-full hidden  md:block">
          Book a Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
