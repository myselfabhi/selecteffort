import React from 'react';
import Link from 'next/link';
import  StudyMaterial from "../login/StudyMaterial"


interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="text-xl font-semibold text-white hover:text-blue-200">Effort Education</a>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {/* Modified: Wrapped the Study Material link with a Link component */}
            <li>
              <Link href="/components/login" legacyBehavior>
                <a className="text-white hover:text-blue-200">Study Material</a>
              </Link>
            </li>
            <li>
              <Link href="/components/About" legacyBehavior>
                <a className="text-white hover:text-blue-200">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/components/contact" legacyBehavior>
                <a className="text-white hover:text-blue-200">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Hamburger Icon */}
          <button className="text-white hover:text-blue-200 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
